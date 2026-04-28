const core = require("./@actions/core");
const exec = require("./@actions/exec");

async function run() {
  const github = await import("./@actions/github");
  core.notice("Hello from my custom JavaScript Action!");
}

run();
