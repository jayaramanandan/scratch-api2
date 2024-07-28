import InputsJson from "./interfaces/InputsJson";
import Parameter from "./interfaces/Parameter";

class Block {
  private opcode: string;
  private next: string = "";
  private parent: string | null;
  private inputs: InputsJson;
  private dropdowns: {};
  private topLevel: boolean;
  private blockId: number = 0;
  private newBlocksAdded: number = 0;

  constructor(
    opcode: string,
    next: string | null,
    parent: string | null,
    parameters: Parameter[],
    dropdowns: {},
    topLevel: boolean,
    blockId: number
  ) {
    this.opcode = opcode;
    this.blockId = blockId;
    this.parent = parent;
  }

  private blockIdString(displacement: number): string {
    return `block${this.blockId + displacement}`;
  }
}

export default Block;

const blocks = {
  "B=Rb8zk$tiEvG0=bUy}g": {
    opcode: "event_whenflagclicked",
    next: "S4,e{:6D:DfOe2O){_-K",
    parent: null,
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: true,
    x: 152,
    y: 82,
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
    next: "BS*|EV2S1z648DQCAAx.",
    parent: "nmk#B#*a}Qs_9`hfYZ.%",
    inputs: {
      DIRECTION: [1, [8, "90"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "BS*|EV2S1z648DQCAAx.": {
    opcode: "motion_pointtowards",
    next: "s*Y$2rjyS*2KS3tz!q`-",
    parent: "ga+zn-KqVUGWK(3!k|%U",
    inputs: {
      TOWARDS: [1, "~StpMT%lOHu{yv[aa]Z_"],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "~StpMT%lOHu{yv[aa]Z_": {
    opcode: "motion_pointtowards_menu",
    next: null,
    parent: "BS*|EV2S1z648DQCAAx.",
    inputs: {},
    fields: {
      TOWARDS: ["_mouse_", null],
    },
    shadow: true,
    topLevel: false,
  },
  "s*Y$2rjyS*2KS3tz!q`-": {
    opcode: "motion_changexby",
    next: "YA#8Sk2f8}FE$z.-1NGg",
    parent: "BS*|EV2S1z648DQCAAx.",
    inputs: {
      DX: [1, [4, "10"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "YA#8Sk2f8}FE$z.-1NGg": {
    opcode: "motion_setx",
    next: "_y=s@Hl^!Fkw?7eGD23O",
    parent: "s*Y$2rjyS*2KS3tz!q`-",
    inputs: {
      X: [1, [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "_y=s@Hl^!Fkw?7eGD23O": {
    opcode: "motion_changeyby",
    next: "-OJDZsOg6aZ;m}dZJZG{",
    parent: "YA#8Sk2f8}FE$z.-1NGg",
    inputs: {
      DY: [1, [4, "10"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "-OJDZsOg6aZ;m}dZJZG{": {
    opcode: "motion_sety",
    next: "J2!A/q``{K^#+LwAXKC$",
    parent: "_y=s@Hl^!Fkw?7eGD23O",
    inputs: {
      Y: [1, [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "J2!A/q``{K^#+LwAXKC$": {
    opcode: "motion_ifonedgebounce",
    next: ")Z5!gvR9LgkNY%|/6Uan",
    parent: "-OJDZsOg6aZ;m}dZJZG{",
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: false,
  },
  ")Z5!gvR9LgkNY%|/6Uan": {
    opcode: "motion_setrotationstyle",
    next: "J6Bg)D]%7vmCe:OCYUON",
    parent: "J2!A/q``{K^#+LwAXKC$",
    inputs: {},
    fields: {
      STYLE: ["left-right", null],
    },
    shadow: false,
    topLevel: false,
  },
  "J6Bg)D]%7vmCe:OCYUON": {
    opcode: "motion_sety",
    next: "ARYP++)r|gYgR`{|p=xi",
    parent: ")Z5!gvR9LgkNY%|/6Uan",
    inputs: {
      Y: [3, "fChpm:fkIRgM`W#ZpDa=", [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "fChpm:fkIRgM`W#ZpDa=": {
    opcode: "motion_xposition",
    next: null,
    parent: "J6Bg)D]%7vmCe:OCYUON",
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "ARYP++)r|gYgR`{|p=xi": {
    opcode: "motion_sety",
    next: "{(h`NkWmq0yxY?.vj}B?",
    parent: "J6Bg)D]%7vmCe:OCYUON",
    inputs: {
      Y: [3, "Oj=BpDT0^9yc06h=XDK|", [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "Oj=BpDT0^9yc06h=XDK|": {
    opcode: "motion_yposition",
    next: null,
    parent: "ARYP++)r|gYgR`{|p=xi",
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "Dwp|Tf`EnI2NrddId7{R": {
    opcode: "motion_direction",
    next: null,
    parent: "{(h`NkWmq0yxY?.vj}B?",
    inputs: {},
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "{(h`NkWmq0yxY?.vj}B?": {
    opcode: "motion_sety",
    next: ";(j0@g}Md2#JL2nQNFbK",
    parent: "ARYP++)r|gYgR`{|p=xi",
    inputs: {
      Y: [3, "Dwp|Tf`EnI2NrddId7{R", [4, "0"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  ";(j0@g}Md2#JL2nQNFbK": {
    opcode: "looks_sayforsecs",
    next: "q~]08/Q4[:r1e%sJdb@(",
    parent: "{(h`NkWmq0yxY?.vj}B?",
    inputs: {
      MESSAGE: [1, [10, "Hello!"]],
      SECS: [1, [4, "2"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "q~]08/Q4[:r1e%sJdb@(": {
    opcode: "looks_say",
    next: "-D}!ehdR~7;h8fzm7)%y",
    parent: ";(j0@g}Md2#JL2nQNFbK",
    inputs: {
      MESSAGE: [1, [10, "Hello!"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  ",e=c28T?W;iL]!)/t0+J": {
    opcode: "procedures_definition",
    next: "|FFPjf0zQ$@VZ,Jwf7hE",
    parent: null,
    inputs: {
      custom_block: [1, "jz#||THAj0~qJc!fp3nV"],
    },
    fields: {},
    shadow: false,
    topLevel: true,
    x: 19,
    y: -41,
  },
  "jz#||THAj0~qJc!fp3nV": {
    opcode: "procedures_prototype",
    next: null,
    parent: ",e=c28T?W;iL]!)/t0+J",
    inputs: {
      ";o,2Z2b:]bkE~I:6S)Zo": [1, "(^?RslNZEUE_#S]iQ=Bl"],
      "9_?tV^.]@_cVE(,gu{($": [1, "pP}yD%@|p#sW[ZP%+Ynb"],
    },
    fields: {},
    shadow: true,
    topLevel: false,
    mutation: {
      tagName: "mutation",
      children: [],
      proccode: "hello %s %b thing3",
      argumentids: '[";o,2Z2b:]bkE~I:6S)Zo","9_?tV^.]@_cVE(,gu{($"]',
      argumentnames: '["thing1","thing2"]',
      argumentdefaults: '["","false"]',
      warp: "false",
    },
  },
  "(^?RslNZEUE_#S]iQ=Bl": {
    opcode: "argument_reporter_string_number",
    next: null,
    parent: "jz#||THAj0~qJc!fp3nV",
    inputs: {},
    fields: {
      VALUE: ["thing1", null],
    },
    shadow: true,
    topLevel: false,
  },
  "pP}yD%@|p#sW[ZP%+Ynb": {
    opcode: "argument_reporter_boolean",
    next: null,
    parent: "jz#||THAj0~qJc!fp3nV",
    inputs: {},
    fields: {
      VALUE: ["thing2", null],
    },
    shadow: true,
    topLevel: false,
  },
  "|FFPjf0zQ$@VZ,Jwf7hE": {
    opcode: "motion_movesteps",
    next: null,
    parent: ",e=c28T?W;iL]!)/t0+J",
    inputs: {
      STEPS: [1, [4, "10"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
  "-D}!ehdR~7;h8fzm7)%y": {
    opcode: "procedures_call",
    next: null,
    parent: "q~]08/Q4[:r1e%sJdb@(",
    inputs: {
      ";o,2Z2b:]bkE~I:6S)Zo": [1, [10, "5"]],
      "9_?tV^.]@_cVE(,gu{($": [2, "R558Q+C$O#5h-M}sxU7N"],
    },
    fields: {},
    shadow: false,
    topLevel: false,
    mutation: {
      tagName: "mutation",
      children: [],
      proccode: "hello %s %b thing3",
      argumentids: '[";o,2Z2b:]bkE~I:6S)Zo","9_?tV^.]@_cVE(,gu{($"]',
      warp: "false",
    },
  },
  "R558Q+C$O#5h-M}sxU7N": {
    opcode: "operator_gt",
    next: null,
    parent: "-D}!ehdR~7;h8fzm7)%y",
    inputs: {
      OPERAND1: [1, [10, "2"]],
      OPERAND2: [1, [10, "50"]],
    },
    fields: {},
    shadow: false,
    topLevel: false,
  },
};
