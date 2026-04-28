async function run() {
  const core = await import("@actions/core");
  const github = await import("@actions/github");
  const exec = await import("@actions/exec");
  core.notice("Hello from my custom JavaScript Action!");
}

run();
