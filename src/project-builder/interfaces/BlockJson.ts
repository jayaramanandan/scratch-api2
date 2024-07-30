import InputsJson from "./InputsJson";

interface BlockJson {
  opcode: string;
  next: null | string;
  parent: null | string;
  inputs: InputsJson;
  fields: {
    [fieldName: string]: any[];
  };
  shadow: boolean;
  topLevel: boolean;
  x?: number;
  y?: number;
}

export default BlockJson;
