import Parameter from "./interfaces/Parameter";
import { InputsJson, InputJsonArray } from "./interfaces/InputsJson";
import BlockData from "./interfaces/BlockData";
import SpriteJson from "./interfaces/SpriteJson";
import BaseSpriteJson from "./interfaces/BaseSpriteJson";
import StageJson from "./interfaces/StageJson";

class BaseSprite {
  protected blockCount: number = 0;
  protected json: BaseSpriteJson | SpriteJson | StageJson;

  constructor(
    isStage: boolean,
    name: string,
    currentCostume: number,
    volume: number,
    layerOrder: number
  ) {
    this.json = {
      isStage,
      name,
      variables: {},
      lists: {},
      broadcasts: {},
      comments: {},
      currentCostume,
      costumes: [],
      sounds: [],
      volume,
      layerOrder,
      blocks: {},
    };
  }

  private blockIdString(displacement: number): string {
    return `block${this.blockCount + displacement}`;
  }

  protected addBlock(
    { opcode, next, parent, parameters, fields, topLevel }: BlockData,
    parameterName?: string
  ): void {
    const blockId: string =
      typeof parameterName == "undefined"
        ? this.blockIdString(0)
        : parent + "-" + parameterName;

    let inputs: InputsJson = this.parseParameters(
      parameters || [],
      blockId,
      opcode
    );

    this.json.blocks[blockId] = {
      opcode,
      next: typeof next == "undefined" ? this.blockIdString(+1) : next,
      parent: typeof parent == "undefined" ? this.blockIdString(-1) : parent,
      inputs,
      fields: fields || {},
      topLevel: topLevel || false,
      shadow: false,
      x: 0,
      y: 0,
    };

    if (typeof parameterName == "undefined") {
      // if the block is not extended or a dropdown
      this.blockCount++;
    }
  }

  protected parseParameters(
    parameters: Parameter[],
    blockId: string,
    opcode: string
  ): InputsJson {
    let inputs: InputsJson = {};

    parameters.forEach(({ parameterName, value, dropdown }: Parameter) => {
      const capitalisedParameterName: string = parameterName.toUpperCase();
      const isExtendedBlock: boolean = Object.keys(value).includes("opcode");

      if (isExtendedBlock) {
        // adds extended block
        this.addBlock(
          {
            // @ts-ignore
            opcode: value.opcode,
            next: null,
            parent: blockId,
            // @ts-ignore
            parameters: value.parameters,
            topLevel: false,
          },
          parameterName
        );
      }

      if (dropdown) {
        inputs[capitalisedParameterName] = [1, blockId + "-" + parameterName];

        if (isExtendedBlock) {
          // @ts-ignore
          inputs[capitalisedParameterName].push(null);
        }

        if (typeof value != "string" && !isExtendedBlock) {
          throw new Error("All dropdown values must be of type string");
        }

        const fields: { [fieldName: string]: [string, 0] } = {};
        fields[capitalisedParameterName] = [`_${value}_`, 0];

        if (!isExtendedBlock) {
          this.addBlock(
            {
              opcode: opcode + "_menu",
              parent: blockId,
              fields,
            },
            parameterName
          );
        }
      } else {
        let typeInteger: number = 0;

        if (typeof value == "number") {
          typeInteger = 4;
        } else if (typeof value == "string") {
          typeInteger = 10;
        } else if (Object.keys(value).includes("angle")) {
          typeInteger = 8;
        }
        // else is extended block - type integer will be 0

        const inputArray: [number, string] = [
          typeInteger,
          String(
            // @ts-ignore
            typeInteger == 8 ? value.angle : typeInteger == 0 ? "0" : value
          ),
        ];

        // @ts-ignore
        let inputJson: InputJsonArray = [
          typeInteger == 0 ? 1 : 3,
          typeInteger == 0 ? blockId + "-" + parameterName : inputArray,
        ];

        if (typeInteger == 0) {
          inputJson.push(inputArray);
        }

        inputs[capitalisedParameterName] = inputJson;
      }
    });

    return inputs;
  }

  public getJson(): BaseSpriteJson | SpriteJson | StageJson {
    return this.json;
  }

  public whenFlagClicked(callback: Function): void {
    this.addBlock({
      opcode: "event_whenflagclicked",
      parent: null,
    });

    callback();
  }

  public endConstructor(): void {
    this.json.blocks[this.blockIdString(-1)].next = null;
  }
}

export default BaseSprite;
