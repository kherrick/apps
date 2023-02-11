import fs from "fs/promises";
const [, , jsonSourceUrl, outputFilename] = process.argv;

if (!jsonSourceUrl || !jsonSourceUrl.match("^https://")) {
  console.error("the first argument must be an https url to a json file.");

  process.exit(1);
}

if (!outputFilename) {
  console.error(
    "the second argument must be the outputFilename to use to write the json source to."
  );

  process.exit(1);
}

await fs.writeFile(
  outputFilename,
  JSON.stringify(await (await fetch(jsonSourceUrl)).json())
);
