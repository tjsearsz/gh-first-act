async function run() {
  const core = await import("@actions/core");
  const github = await import("@actions/github");
  const exec = await import("@actions/exec");

  // 1) Get some input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // github.context.

  // 2) Upload files
  const s3Uri = `s3://${bucket}`;
  // AWS_ACCESS_KEY_ID=sadfafasfafsfas
  // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;

  core.notice("Hello from my custom JavaScript Action!");
  core.notice(bucket);
  core.notice(bucketRegion);
  core.notice(distFolder);

  core.setOutput("website-url", websiteUrl); // ::set-output equivalent
}

run();
