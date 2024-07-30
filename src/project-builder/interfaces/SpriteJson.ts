import BlockJson from "./BlockJson";
import CostumeJson from "./CostumeJson";
import SoundJson from "./SoundJson";

interface SpriteJson {
  isStage: false;
  name: string;
  variables: { [variableCode: string]: [variableName: string, value: any] };
  lists: {};
  broadcasts: {};
  blocks: { [blockId: string]: BlockJson };
  comments: {};
  currentCostume: number;
  costumes: CostumeJson[];
  sounds: SoundJson[];
  volume: number;
  layerOrder: number;
  visible: boolean;
  x: number;
  y: number;
  size: number;
  direction: number;
  draggable: boolean;
  tempo?: number;
  videoTransparency?: number;
  videoState?: string;
  textToSpeechLanguage?: null;
  rotationStyle: string;
}

export default SpriteJson;
