import BaseSpriteJson from "./BaseSpriteJson";

interface SpriteJson extends BaseSpriteJson {
  isStage: false;
  visible: boolean;
  x: number;
  y: number;
  size: number;
  direction: number;
  draggable: boolean;
  rotationStyle: string;
}

export default SpriteJson;
