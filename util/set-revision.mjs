import fs from "fs/promises";
import { exec } from "child_process";

exec("git rev-parse HEAD", async (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  if (stdout) {
    const [, , file] = process.argv;

    if (!file) {
      console.error(
        "the first argument must be the path to the index.html file."
      );

      process.exit(1);
    }

    const revisionResult = stdout.trim().slice(0, 8);
    const regex = new RegExp(`name="revision" content`);
    const replacement = `name="revision" content="${revisionResult}"`;

    let fileBuffer = null;

    try {
      fileBuffer = await fs.readFile(file);
    } catch (error) {
      console.error(error);

      process.exit(1);
    }

    fs.writeFile(file, fileBuffer.toString().replace(regex, replacement));
  }
});
