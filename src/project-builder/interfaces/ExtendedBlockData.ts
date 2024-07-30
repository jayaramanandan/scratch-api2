import Parameter from "./Parameter";

interface ExtendedBlockData {
  opcode: string;
  parameters?: Parameter[];
  dropdowns?: [];
}

export default ExtendedBlockData;
