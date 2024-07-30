import BlockJson from "./interfaces/BlockJson";
import ProjectJson from "./interfaces/ProjectJson";
import Sprite from "./Sprite";

class Project {
  private blocks: { [blockId: string]: BlockJson } = {};

  constructor(sprites: Sprite[]) {
    sprites.forEach((sprite: Sprite) => {
      // access sprite functions and call each one
      Object.getOwnPropertyNames(Object.getPrototypeOf(sprite)).forEach(
        (methodName: string) => {
          if (methodName != "constructor") {
            Object(sprite)[methodName].call();
          }
        }
      );
      // when calling sprite.constructor(), place when_green_flag as top level
      // when calling any other function in sprite, place create function as top level
    });
  }

  public getJson(): void {}
}

export default Project;
