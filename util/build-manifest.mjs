import fs from "fs/promises";

const [, , file, start_url, scope] = process.argv;

if (!file) {
  console.error(
    "the first argument must be the path to the manifest.webmanifest file."
  );

  process.exit(1);
}

if (!start_url) {
  console.error(
    "the second argument must be the start_url to use in the manifest.webmanifest file"
  );

  process.exit(1);
}

if (!scope) {
  console.error(
    "the third argument must be the scope to use in the manifest.webmanifest file"
  );

  process.exit(1);
}

let fileBuffer = null;

try {
  fileBuffer = await fs.readFile(file);
} catch (error) {
  console.error(error);

  process.exit(1);
}

fs.writeFile(
  file,
  `${JSON.stringify(
    {
      ...JSON.parse(fileBuffer.toString()),
      start_url,
      scope,
    },
    null,
    "  "
  )}\n`
);
