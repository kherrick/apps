import fs from "fs/promises";

const [, , file] = process.argv;

if (!file) {
  console.error("the first argument must be the path to the index.html file.");

  process.exit(1);
}

const prepend = '<meta name="google-site-verification" content="N2PQ1HKlfnbZND4x9unvmo_noUX6Wb9E1XX77DH0GI0" />'
const search = '</head>'

const regex = new RegExp(search);
const replacement = `${prepend}${search}`;

let fileBuffer = null;

try {
  fileBuffer = await fs.readFile(file);
} catch (error) {
  console.error(error);

  process.exit(1);
}

fs.writeFile(file, fileBuffer.toString().replace(regex, replacement));
