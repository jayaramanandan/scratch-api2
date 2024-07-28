import Degree from "./Degree";
import ExtendedBlockData from "./ExtendedBlockData";

interface Parameter {
  parameterName: string;
  value: number | string | Degree | ExtendedBlockData;
}

export default Parameter;
