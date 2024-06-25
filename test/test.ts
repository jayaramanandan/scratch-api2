import User from "../src/modules/api/User";

async function main() {
  const user: User = new User();
  user.login("AbeIsGood", `console.log("1")`);
}

main();
