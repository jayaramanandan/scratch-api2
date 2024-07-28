import BlockJson from "./BlockJson";
import CostumeJson from "./CostumeJson";
import SoundJson from "./SoundJson";

interface SpriteJson {
  isStage: boolean;
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
  tempo: number;
  videoTransparency: number;
  videoState: string;
  textToSpeechLanguage: null;
}

export default SpriteJson;
