import Sprite from "./Sprite";

class Project {
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
}

export default Project;
