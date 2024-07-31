import BaseSpriteJson from "./BaseSpriteJson";

interface StageJson extends BaseSpriteJson {
  isStage: true;
  tempo: number;
  videoTransparency: number;
  videoState: string;
  textToSpeechLanguage: null;
}

export default StageJson;
