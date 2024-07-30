import Parameter from "./Parameter";

interface BlockData {
  opcode: string;
  next?: string | null;
  parent?: string | null;
  parameters?: Parameter[];
  fields?: {};
  topLevel?: boolean;
}

export default BlockData;
