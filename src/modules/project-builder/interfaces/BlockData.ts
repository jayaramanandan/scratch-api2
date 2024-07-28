import Parameter from "./Parameter";

interface BlockData {
  opcode: string;
  next?: string | null;
  parent?: string | null;
  parameters?: Parameter[];
  dropdowns?: [];
  topLevel?: boolean;
  type?: "extended" | "dropdown";
}

export default BlockData;
