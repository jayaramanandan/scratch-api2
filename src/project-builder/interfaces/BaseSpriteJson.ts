import BlockJson from "./BlockJson";
import CostumeJson from "./CostumeJson";
import SoundJson from "./SoundJson";

interface BaseSpriteJson {
  isStage: boolean;
  name: string;
  variables: {};
  lists: {};
  broadcasts: {};
  blocks: { [blockId: string]: BlockJson };
  comments: {};
  currentCostume: number;
  costumes: CostumeJson[];
  sounds: SoundJson[];
  volume: number;
  layerOrder: number;
}

export default BaseSpriteJson;
