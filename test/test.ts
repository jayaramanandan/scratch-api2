import { readFileSync } from "fs";
import { join } from "path";

import { User } from "../src/api";
import Project from "../src/project-builder/Project";
import Sprite from "../src/project-builder/Sprite";

const { username, password }: any = JSON.parse(
  readFileSync(join(__dirname, "./details.json"), "utf8")
);

async function main() {
  const user: User = new User();
  await user.login(username, password);

  await user.saveProject(868816629, {
    targets: [
      {
        isStage: true,
        name: "Stage",
        variables: {},
        lists: {},
        broadcasts: {},
        blocks: {},
        comments: {},
        currentCostume: 0,
        costumes: [
          {
            name: "backdrop1",
            dataFormat: "svg",
            assetId: "cd21514d0531fdffb22204e0ec5ed84a",
            md5ext: "cd21514d0531fdffb22204e0ec5ed84a.svg",
            rotationCenterX: 240,
            rotationCenterY: 180,
          },
        ],
        sounds: [
          {
            name: "pop",
            assetId: "83a9787d4cb6f3b7632b4ddfebf74367",
            dataFormat: "wav",
            format: "",
            rate: 48000,
            sampleCount: 1124,
            md5ext: "83a9787d4cb6f3b7632b4ddfebf74367.wav",
          },
        ],
        volume: 100,
        layerOrder: 0,
        tempo: 60,
        videoTransparency: 50,
        videoState: "on",
        textToSpeechLanguage: null,
      },
      {
        isStage: false,
        name: "afdrgftyfth",
        variables: {},
        lists: {},
        broadcasts: {},
        blocks: {
          "ZIeb|WW@Kd6Eg.jHHNiQ": {
            opcode: "motion_movesteps",
            next: null,
            parent: null,
            inputs: { STEPS: [1, [4, "10"]] },
            fields: {},
            shadow: false,
            topLevel: true,
            x: 378,
            y: 148,
          },
        },
        comments: {},
        currentCostume: 0,
        costumes: [
          {
            name: "costume1",
            bitmapResolution: 1,
            dataFormat: "svg",
            assetId: "bcf454acf82e4504149f7ffe07081dbc",
            md5ext: "bcf454acf82e4504149f7ffe07081dbc.svg",
            rotationCenterX: 48,
            rotationCenterY: 50,
          },
          {
            name: "costume2",
            bitmapResolution: 1,
            dataFormat: "svg",
            assetId: "0fb9be3e8397c983338cb71dc84d0b25",
            md5ext: "0fb9be3e8397c983338cb71dc84d0b25.svg",
            rotationCenterX: 46,
            rotationCenterY: 53,
          },
        ],
        sounds: [
          {
            name: "Meow",
            assetId: "83c36d806dc92327b9e7049a565c6bff",
            dataFormat: "wav",
            format: "",
            rate: 48000,
            sampleCount: 40682,
            md5ext: "83c36d806dc92327b9e7049a565c6bff.wav",
          },
        ],
        volume: 100,
        layerOrder: 1,
        visible: true,
        x: 0,
        y: 0,
        size: 100,
        direction: 90,
        draggable: false,
        rotationStyle: "all around",
      },
    ],
    monitors: [],
    extensions: [],
    meta: {
      semver: "3.0.0",
      vm: "5.0.40",
      agent:
        "Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0",
    },
  });
}

class Cat extends Sprite {
  constructor() {
    super("Cat");
    this.goTo(this.test(this.test("hello")));
    this.endConstructor();

    //console.log(this.getJson().blocks);
  }

  public hello() {
    //console.log("hello");
  }
}

new Project([new Cat()]);

/*
import startServer from "../src/renderer";
import path from "path";
startServer({
  targets: [
    {
      isStage: true,
      name: "Stage",
      variables: {
        "`jEk@4|i[#Fk?(8x)AV.-my variable": ["my variable", 0],
      },
      lists: {},
      broadcasts: {},
      blocks: {},
      comments: {},
      currentCostume: 0,
      costumes: [
        {
          name: "backdrop1",
          dataFormat: "svg",
          assetId: "cd21514d0531fdffb22204e0ec5ed84a",
          md5ext: "cd21514d0531fdffb22204e0ec5ed84a.svg",
          rotationCenterX: 240,
          rotationCenterY: 180,
        },
      ],
      sounds: [
        {
          name: "pop",
          assetId: "83a9787d4cb6f3b7632b4ddfebf74367",
          dataFormat: "wav",
          format: "",
          rate: 44100,
          sampleCount: 1032,
          md5ext: "83a9787d4cb6f3b7632b4ddfebf74367.wav",
        },
      ],
      volume: 100,
      layerOrder: 0,
      tempo: 60,
      videoTransparency: 50,
      videoState: "on",
      textToSpeechLanguage: null,
    },
    {
      isStage: false,
      name: "afdrgftyfth",
      variables: {},
      lists: {},
      broadcasts: {},
      blocks: {
        "B=Rb8zk$tiEvG0=bUy}g": {
          opcode: "event_whenflagclicked",
          next: "S4,e{:6D:DfOe2O){_-K",
          parent: null,
          inputs: {},
          fields: {},
          shadow: false,
          topLevel: true,
          x: 45,
          y: 7,
        },
        "S4,e{:6D:DfOe2O){_-K": {
          opcode: "motion_movesteps",
          next: "2.5o![aXx:sRr{eT^[.^",
          parent: "B=Rb8zk$tiEvG0=bUy}g",
          inputs: {
            STEPS: [1, [4, "10"]],
          },
          fields: {},
          shadow: false,
          topLevel: false,
        },
        "2.5o![aXx:sRr{eT^[.^": {
          opcode: "motion_turnright",
          next: "je-nuc8`-)c0CM|kTPRx",
          parent: "S4,e{:6D:DfOe2O){_-K",
          inputs: {
            DEGREES: [1, [4, "15"]],
          },
          fields: {},
          shadow: false,
          topLevel: false,
        },
        "je-nuc8`-)c0CM|kTPRx": {
          opcode: "motion_turnleft",
          next: "s2B9g.62N!Wp+Z4/]4rq",
          parent: "2.5o![aXx:sRr{eT^[.^",
          inputs: {
            DEGREES: [1, [4, "15"]],
          },
          fields: {},
          shadow: false,
          topLevel: false,
        },
        "s2B9g.62N!Wp+Z4/]4rq": {
          opcode: "motion_goto",
          next: "|s;`bB1P$b{BDmkw.@-%",
          parent: "je-nuc8`-)c0CM|kTPRx",
          inputs: {
            TO: [1, "]tnedSOB)^0U)a6;5$Id"],
          },
          fields: {},
          shadow: false,
          topLevel: false,
        },
        "]tnedSOB)^0U)a6;5$Id": {
          opcode: "motion_goto_menu",
          next: null,
          parent: "s2B9g.62N!Wp+Z4/]4rq",
          inputs: {},
          fields: {
            TO: ["_random_", null],
          },
          shadow: true,
          topLevel: false,
        },
        "|s;`bB1P$b{BDmkw.@-%": {
          opcode: "motion_gotoxy",
          next: ";kF}D^[{0lEyhg%^_YPB",
          parent: "s2B9g.62N!Wp+Z4/]4rq",
          inputs: {
            X: [1, [4, "0"]],
            Y: [1, [4, "0"]],
          },
          fields: {},
          shadow: false,
          topLevel: false,
        },
        ";kF}D^[{0lEyhg%^_YPB": {
          opcode: "motion_glideto",
          next: "nmk#B#*a}Qs_9`hfYZ.%",
          parent: "|s;`bB1P$b{BDmkw.@-%",
          inputs: {
            SECS: [1, [4, "1"]],
            TO: [1, "20hLsLwsMRb8$s-u|_vh"],
          },
          fields: {},
          shadow: false,
          topLevel: false,
        },
        "20hLsLwsMRb8$s-u|_vh": {
          opcode: "motion_glideto_menu",
          next: null,
          parent: ";kF}D^[{0lEyhg%^_YPB",
          inputs: {},
          fields: {
            TO: ["_random_", null],
          },
          shadow: true,
          topLevel: false,
        },
        "nmk#B#*a}Qs_9`hfYZ.%": {
          opcode: "motion_glidesecstoxy",
          next: "ga+zn-KqVUGWK(3!k|%U",
          parent: ";kF}D^[{0lEyhg%^_YPB",
          inputs: {
            SECS: [1, [4, "1"]],
            X: [1, [4, "0"]],
            Y: [1, [4, "0"]],
          },
          fields: {},
          shadow: false,
          topLevel: false,
        },
        "ga+zn-KqVUGWK(3!k|%U": {
          opcode: "motion_pointindirection",
          next: null,
          parent: "nmk#B#*a}Qs_9`hfYZ.%",
          inputs: {
            DIRECTION: [1, [8, "90"]],
          },
          fields: {},
          shadow: false,
          topLevel: false,
        },
      },
      comments: {},
      currentCostume: 0,
      costumes: [
        {
          name: "costume1",
          bitmapResolution: 1,
          dataFormat: "svg",
          assetId: "bcf454acf82e4504149f7ffe07081dbc",
          md5ext: "bcf454acf82e4504149f7ffe07081dbc.svg",
          rotationCenterX: 48,
          rotationCenterY: 50,
        },
        {
          name: "costume2",
          bitmapResolution: 1,
          dataFormat: "svg",
          assetId: "0fb9be3e8397c983338cb71dc84d0b25",
          md5ext: "0fb9be3e8397c983338cb71dc84d0b25.svg",
          rotationCenterX: 46,
          rotationCenterY: 53,
        },
      ],
      sounds: [
        {
          name: "Meow",
          assetId: "83c36d806dc92327b9e7049a565c6bff",
          dataFormat: "wav",
          format: "",
          rate: 44100,
          sampleCount: 37376,
          md5ext: "83c36d806dc92327b9e7049a565c6bff.wav",
        },
      ],
      volume: 100,
      layerOrder: 1,
      visible: true,
      x: 0,
      y: 0,
      size: 100,
      direction: 90,
      draggable: false,
      rotationStyle: "all around",
    },
  ],
  monitors: [],
  extensions: [],
  meta: {
    semver: "3.0.0",
    vm: "2.3.4",
    agent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  },
});*/

main();
