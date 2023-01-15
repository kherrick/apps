import fs from "fs/promises";

const [, , file, find, replace] = process.argv;

if (!file) {
  console.error("the first argument must be the path to the index.html file.");

  process.exit(1);
}

if (!find) {
  console.error("the second argument must be the base path to search for");

  process.exit(1);
}

if (!replace) {
  console.error("the third argument must be the base path to replace with");

  process.exit(1);
}

const regex = new RegExp(`base href="${find}"`);
const replacement = `base href="${replace}"`;

let fileBuffer = null;

try {
  fileBuffer = await fs.readFile(file);
} catch (error) {
  console.error(error);

  process.exit(1);
}

fs.writeFile(file, fileBuffer.toString().replace(regex, replacement));
