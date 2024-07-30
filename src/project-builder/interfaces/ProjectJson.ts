import StageJson from "./StageJson";
import SpriteJson from "./SpriteJson";

interface ProjectJson {
  targets: (StageJson | SpriteJson)[];

  monitors: any[];
  extensions: any[];
  meta: {
    semver: "3.0.0";
    vm: "2.3.4";
    agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
  };
}

export default ProjectJson;
