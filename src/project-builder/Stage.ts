import BaseSprite from "./BaseSprite";

class Stage extends BaseSprite {
  constructor(
    tempo: number = 60,
    videoTransparency: number = 50,
    videoState: string = "on",
    textToSpeechLanguage: any = null,
    currentCostume: number = 0,
    volume: number = 100
  ) {
    super(false, "Stage", currentCostume, volume, 0);

    Object.assign(this.json, {
      tempo,
      videoTransparency,
      videoState,
      textToSpeechLanguage,
    });
  }
}

export default Stage;
