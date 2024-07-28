import Position from "./interfaces/Position";
import BlockJson from "./interfaces/BlockJson";
import Parameter from "./interfaces/Parameter";
import InputsJson from "./interfaces/InputsJson";
import BlockData from "./interfaces/BlockData";
import ExtendedBlockData from "./interfaces/ExtendedBlockData";

class Sprite {
  private blocks: { [blockId: string]: BlockJson } = {};
  private blockCount: number = 0;

  constructor(
    name: string,
    currentCostume: number = 0,
    volume: number = 0,
    layerOrder: number = 0,
    visible: boolean = true,
    startingPosition: Position = { x: 0, y: 0, direction: 90 },
    startingSize: number = 0,
    startingVolume: number = 0,
    draggable: boolean = false,
    rotationStyle: string = "all around"
  ) {}

  private blockIdString(displacement: number): string {
    return `block${this.blockCount + displacement}`;
  }

  private addBlock({
    opcode,
    next,
    parent,
    parameters,
    dropdowns,
    topLevel,
    type,
  }: BlockData): void {
    const blockId: string = type
      ? parent + "-" + type[0].toUpperCase()
      : this.blockIdString(0);

    this.blocks[blockId] = {
      opcode,
      next: next || this.blockIdString(+1),
      parent: parent || this.blockIdString(-1),
      inputs: parameters ? this.parseParameters(parameters, blockId) : {},
      fields: dropdowns ? this.parseDropdowns() : {},
      topLevel: topLevel || false,
      shadow: false,
      x: 0,
      y: 0,
    };

    if (!type) {
      // if the block is not extended or a dropdown
      this.blockCount++;
    }
  }

  private parseParameters(
    parameters: Parameter[],
    blockId: string
  ): InputsJson {
    let inputs: InputsJson = {};
    parameters.forEach(({ parameterName, value }: Parameter) => {
      let typeInteger: number = 0;
      let isExtendedBlock: boolean = false;

      if (typeof value == "number") {
        typeInteger = 4;
      } else if (typeof value == "string") {
        typeInteger = 10;
      } else if (Object.keys(value).includes("angle")) {
        typeInteger = 8;
      } else {
        // is extended block
        isExtendedBlock = true;
        this.addBlock({
          // @ts-ignore
          opcode: value.opcode,
          next: null,
          parent: blockId,
          // @ts-ignore
          parameters: value.parameters,
          // @ts-ignore
          dropdowns: value.dropdowns,
          topLevel: false,
          type: "extended",
        });
      }

      const inputArray: [number, string] = [typeInteger, String(value)];

      inputs[parameterName.toUpperCase()] = [
        value ? 3 : 1,
        isExtendedBlock ? blockId + "-E" : inputArray,
        inputArray,
      ];
    });

    return inputs;
  }

  private parseDropdowns(): {
    [fieldName: string]: any[];
  } {
    return {};
  }

  public whenFlagClicked(callback: Function): void {
    this.addBlock({
      opcode: "event_whenflagclicked",
    });

    callback();
  }

  public move(steps: number | ExtendedBlockData): void {
    this.addBlock({
      opcode: "motion_movesteps",
      parameters: [
        {
          parameterName: "steps",
          value: steps,
        },
      ],
    });
  }
}

export default Sprite;

const blocks = {
  "B=Rb8zk$tiEvG0=bUy}g": {
    opcode: "event_whenflagclicked",
    next: "S4,e{:6D:DfOe2O){_-K",
    parent: null,
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: true,
    x: 152,
    y: 82,
  },
  "S4,e{:6D:DfOe2O){_-K": {
    opcode: "motion_movesteps",
    next: "2.5o![aXx:sRr{eT^[.^",
    parent: "B=Rb8zk$tiEvG0=bUy}g",
    inputs: {
      STEPS: [1, [4, "10"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "2.5o![aXx:sRr{eT^[.^": {
    opcode: "motion_turnright",
    next: "je-nuc8`-)c0CM|kTPRx",
    parent: "S4,e{:6D:DfOe2O){_-K",
    inputs: {
      DEGREES: [1, [4, "15"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "je-nuc8`-)c0CM|kTPRx": {
    opcode: "motion_turnleft",
    next: "s2B9g.62N!Wp+Z4/]4rq",
    parent: "2.5o![aXx:sRr{eT^[.^",
    inputs: {
      DEGREES: [1, [4, "15"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "s2B9g.62N!Wp+Z4/]4rq": {
    opcode: "motion_goto",
    next: "|s;`bB1P$b{BDmkw.@-%",
    parent: "je-nuc8`-)c0CM|kTPRx",
    inputs: {
      TO: [1, "]tnedSOB)^0U)a6;5$Id"],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "]tnedSOB)^0U)a6;5$Id": {
    opcode: "motion_goto_menu",
    next: null,
    parent: "s2B9g.62N!Wp+Z4/]4rq",
    inputs: {},
    fields: {
      TO: ["_random_", null],
    },
    shadow: true,
    topLevel: false,
  },
  "|s;`bB1P$b{BDmkw.@-%": {
    opcode: "motion_gotoxy",
    next: ";kF}D^[{0lEyhg%^_YPB",
    parent: "s2B9g.62N!Wp+Z4/]4rq",
    inputs: {
      X: [1, [4, "0"]],
      Y: [1, [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  ";kF}D^[{0lEyhg%^_YPB": {
    opcode: "motion_glideto",
    next: "nmk#B#*a}Qs_9`hfYZ.%",
    parent: "|s;`bB1P$b{BDmkw.@-%",
    inputs: {
      SECS: [1, [4, "1"]],
      TO: [1, "20hLsLwsMRb8$s-u|_vh"],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "20hLsLwsMRb8$s-u|_vh": {
    opcode: "motion_glideto_menu",
    next: null,
    parent: ";kF}D^[{0lEyhg%^_YPB",
    inputs: {},
    fields: {
      TO: ["_random_", null],
    },
    shadow: true,
    topLevel: false,
  },
  "nmk#B#*a}Qs_9`hfYZ.%": {
    opcode: "motion_glidesecstoxy",
    next: "ga+zn-KqVUGWK(3!k|%U",
    parent: ";kF}D^[{0lEyhg%^_YPB",
    inputs: {
      SECS: [1, [4, "1"]],
      X: [1, [4, "0"]],
      Y: [1, [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "ga+zn-KqVUGWK(3!k|%U": {
    opcode: "motion_pointindirection",
    next: "BS*|EV2S1z648DQCAAx.",
    parent: "nmk#B#*a}Qs_9`hfYZ.%",
    inputs: {
      DIRECTION: [1, [8, "90"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "BS*|EV2S1z648DQCAAx.": {
    opcode: "motion_pointtowards",
    next: "s*Y$2rjyS*2KS3tz!q`-",
    parent: "ga+zn-KqVUGWK(3!k|%U",
    inputs: {
      TOWARDS: [1, "~StpMT%lOHu{yv[aa]Z_"],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "~StpMT%lOHu{yv[aa]Z_": {
    opcode: "motion_pointtowards_menu",
    next: null,
    parent: "BS*|EV2S1z648DQCAAx.",
    inputs: {},
    fields: {
      TOWARDS: ["_mouse_", null],
    },
    shadow: true,
    topLevel: false,
  },
  "s*Y$2rjyS*2KS3tz!q`-": {
    opcode: "motion_changexby",
    next: "YA#8Sk2f8}FE$z.-1NGg",
    parent: "BS*|EV2S1z648DQCAAx.",
    inputs: {
      DX: [1, [4, "10"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "YA#8Sk2f8}FE$z.-1NGg": {
    opcode: "motion_setx",
    next: "_y=s@Hl^!Fkw?7eGD23O",
    parent: "s*Y$2rjyS*2KS3tz!q`-",
    inputs: {
      X: [1, [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "_y=s@Hl^!Fkw?7eGD23O": {
    opcode: "motion_changeyby",
    next: "-OJDZsOg6aZ;m}dZJZG{",
    parent: "YA#8Sk2f8}FE$z.-1NGg",
    inputs: {
      DY: [1, [4, "10"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "-OJDZsOg6aZ;m}dZJZG{": {
    opcode: "motion_sety",
    next: "J2!A/q``{K^#+LwAXKC$",
    parent: "_y=s@Hl^!Fkw?7eGD23O",
    inputs: {
      Y: [1, [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "J2!A/q``{K^#+LwAXKC$": {
    opcode: "motion_ifonedgebounce",
    next: ")Z5!gvR9LgkNY%|/6Uan",
    parent: "-OJDZsOg6aZ;m}dZJZG{",
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: false,
  },
  ")Z5!gvR9LgkNY%|/6Uan": {
    opcode: "motion_setrotationstyle",
    next: "J6Bg)D]%7vmCe:OCYUON",
    parent: "J2!A/q``{K^#+LwAXKC$",
    inputs: {},
    fields: {
      STYLE: ["left-right", null],
    },
    shadow: false,
    topLevel: false,
  },
  "J6Bg)D]%7vmCe:OCYUON": {
    opcode: "motion_sety",
    next: "ARYP++)r|gYgR`{|p=xi",
    parent: ")Z5!gvR9LgkNY%|/6Uan",
    inputs: {
      Y: [3, "fChpm:fkIRgM`W#ZpDa=", [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "fChpm:fkIRgM`W#ZpDa=": {
    opcode: "motion_xposition",
    next: null,
    parent: "J6Bg)D]%7vmCe:OCYUON",
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "ARYP++)r|gYgR`{|p=xi": {
    opcode: "motion_sety",
    next: "{(h`NkWmq0yxY?.vj}B?",
    parent: "J6Bg)D]%7vmCe:OCYUON",
    inputs: {
      Y: [3, "Oj=BpDT0^9yc06h=XDK|", [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "Oj=BpDT0^9yc06h=XDK|": {
    opcode: "motion_yposition",
    next: null,
    parent: "ARYP++)r|gYgR`{|p=xi",
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "Dwp|Tf`EnI2NrddId7{R": {
    opcode: "motion_direction",
    next: null,
    parent: "{(h`NkWmq0yxY?.vj}B?",
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "{(h`NkWmq0yxY?.vj}B?": {
    opcode: "motion_sety",
    next: ";(j0@g}Md2#JL2nQNFbK",
    parent: "ARYP++)r|gYgR`{|p=xi",
    inputs: {
      Y: [3, "Dwp|Tf`EnI2NrddId7{R", [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  ";(j0@g}Md2#JL2nQNFbK": {
    opcode: "looks_sayforsecs",
    next: "q~]08/Q4[:r1e%sJdb@(",
    parent: "{(h`NkWmq0yxY?.vj}B?",
    inputs: {
      MESSAGE: [1, [10, "Hello!"]],
      SECS: [3, "R558Q+C$O#5h-M}sxU7N", [4, "2"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "q~]08/Q4[:r1e%sJdb@(": {
    opcode: "looks_say",
    next: "-D}!ehdR~7;h8fzm7)%y",
    parent: ";(j0@g}Md2#JL2nQNFbK",
    inputs: {
      MESSAGE: [1, [10, "Hello!"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  ",e=c28T?W;iL]!)/t0+J": {
    opcode: "procedures_definition",
    next: "|FFPjf0zQ$@VZ,Jwf7hE",
    parent: null,
    inputs: {
      custom_block: [1, "jz#||THAj0~qJc!fp3nV"],
    },
    fields: {},
    shadow: false,
    topLevel: true,
    x: 19,
    y: -41,
  },
  "jz#||THAj0~qJc!fp3nV": {
    opcode: "procedures_prototype",
    next: null,
    parent: ",e=c28T?W;iL]!)/t0+J",
    inputs: {
      ";o,2Z2b:]bkE~I:6S)Zo": [1, "(^?RslNZEUE_#S]iQ=Bl"],
      "9_?tV^.]@_cVE(,gu{($": [1, "pP}yD%@|p#sW[ZP%+Ynb"],
    },
    fields: {},
    shadow: true,
    topLevel: false,
    mutation: {
      tagName: "mutation",
      children: [],
      proccode: "hello %s %b thing3",
      argumentids: '[";o,2Z2b:]bkE~I:6S)Zo","9_?tV^.]@_cVE(,gu{($"]',
      argumentnames: '["thing1","thing2"]',
      argumentdefaults: '["","false"]',
      warp: "false",
    },
  },
  "(^?RslNZEUE_#S]iQ=Bl": {
    opcode: "argument_reporter_string_number",
    next: null,
    parent: "jz#||THAj0~qJc!fp3nV",
    inputs: {},
    fields: {
      VALUE: ["thing1", null],
    },
    shadow: true,
    topLevel: false,
  },
  "pP}yD%@|p#sW[ZP%+Ynb": {
    opcode: "argument_reporter_boolean",
    next: null,
    parent: "jz#||THAj0~qJc!fp3nV",
    inputs: {},
    fields: {
      VALUE: ["thing2", null],
    },
    shadow: true,
    topLevel: false,
  },
  "|FFPjf0zQ$@VZ,Jwf7hE": {
    opcode: "motion_movesteps",
    next: null,
    parent: ",e=c28T?W;iL]!)/t0+J",
    inputs: {
      STEPS: [1, [4, "10"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "-D}!ehdR~7;h8fzm7)%y": {
    opcode: "procedures_call",
    next: null,
    parent: "q~]08/Q4[:r1e%sJdb@(",
    inputs: {
      ";o,2Z2b:]bkE~I:6S)Zo": [1, [10, "5"]],
      "9_?tV^.]@_cVE(,gu{($": [2, "4Euja,Nu=FQP5fvGo~{#"],
    },
    fields: {},
    shadow: false,
    topLevel: false,
    mutation: {
      tagName: "mutation",
      children: [],
      proccode: "hello %s %b thing3",
      argumentids: '[";o,2Z2b:]bkE~I:6S)Zo","9_?tV^.]@_cVE(,gu{($"]',
      warp: "false",
    },
  },
  "R558Q+C$O#5h-M}sxU7N": {
    opcode: "operator_gt",
    next: null,
    parent: ";(j0@g}Md2#JL2nQNFbK",
    inputs: {
      OPERAND1: [1, [10, "2"]],
      OPERAND2: [1, [10, "50"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "4Euja,Nu=FQP5fvGo~{#": {
    opcode: "sensing_touchingobject",
    next: null,
    parent: "-D}!ehdR~7;h8fzm7)%y",
    inputs: {
      TOUCHINGOBJECTMENU: [1, "mS-;c[H5qFWNirE+I;Oq"],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "mS-;c[H5qFWNirE+I;Oq": {
    opcode: "sensing_touchingobjectmenu",
    next: null,
    parent: "4Euja,Nu=FQP5fvGo~{#",
    inputs: {},
    fields: {
      TOUCHINGOBJECTMENU: ["_mouse_", null],
    },
    shadow: true,
    topLevel: false,
  },
};
