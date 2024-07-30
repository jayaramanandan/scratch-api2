import BlockJson from "./BlockJson";
import CostumeJson from "./CostumeJson";
import SoundJson from "./SoundJson";

interface StageJson {
  isStage: true;
  name: string;
  variables: { [variableId: string]: [string, string | number] };
  lists: {};
  broadcasts: {};
  blocks: { [blockId: string]: BlockJson };
  comments: {};
  currentCostume: 0;
  costumes: CostumeJson[];
  sounds: SoundJson[];
  volume: number;
  layerOrder: number;
  tempo: number;
  videoTransparency: number;
  videoState: string;
  textToSpeechLanguage: null;
}

export default StageJson;
