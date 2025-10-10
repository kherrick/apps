import { appendFile, writeFile, readFile } from "fs/promises";

// Usage: node script.js input.txt output.txt [host]
const [, , inputFilename, outputFilename, host] = process.argv;

if (!inputFilename) {
  console.error("The first argument must be the path to the input filename (txt).");
  process.exit(1);
}
if (!outputFilename) {
  console.error("The second argument must be the path to the output filename (txt).");
  process.exit(1);
}

// Read plain text file and split into lines
const fileContent = await readFile(inputFilename, "utf8");
const validPaths = fileContent.split(/\r?\n/);

const presentationRouteOne = "rendering-app-shells-and-pwas-oh-my";
const presentationMapOne = {
  [presentationRouteOne]: {
    "": { lastItem: 0 },
    1: { lastItem: 11 },
    2: { lastItem: 4 },
    3: { lastItem: 7 },
    4: { lastItem: 11 },
    5: { lastItem: 4 },
    6: { lastItem: 4 },
    7: { lastItem: 9 },
    8: { lastItem: 3 },
    9: { lastItem: 2 },
    10: { lastItem: 1 },
    11: { lastItem: 1 },
    12: { lastItem: 4 },
    13: { lastItem: 1 },
    14: { lastItem: 1 },
    15: { lastItem: 1 },
    16: { lastItem: 0 },
    17: { lastItem: 1 },
    18: { lastItem: 1 },
    19: { lastItem: 1 },
    20: { lastItem: 1 },
    21: { lastItem: 1 },
    22: { lastItem: 1 },
    23: { lastItem: 3 },
    24: { lastItem: 3 },
    25: { lastItem: 3 },
    26: { lastItem: 3 },
    27: { lastItem: 4 },
    28: { lastItem: 4 },
    29: { lastItem: 4 },
    30: { lastItem: 3 },
    31: { lastItem: 3 },
    32: { lastItem: 9 },
    33: { lastItem: 9 },
    end: { lastItem: 1 },
  },
};

const presentationRouteTwo = "progressive-web-apps";
const presentationMapTwo = {
  [presentationRouteTwo]: {
    "": { lastItem: 0 },
    1: { lastItem: 1 },
    2: { lastItem: 1 },
    3: { lastItem: 1 },
    4: { lastItem: 1 },
    5: { lastItem: 1 },
    6: { lastItem: 7 },
    7: { lastItem: 7 },
    8: { lastItem: 1 },
    9: { lastItem: 1 },
    10: { lastItem: 3 },
    11: { lastItem: 3 },
    12: { lastItem: 3 },
    13: { lastItem: 3 },
    14: { lastItem: 4 },
    15: { lastItem: 4 },
    16: { lastItem: 4 },
    17: { lastItem: 3 },
    18: { lastItem: 3 },
    19: { lastItem: 3 },
    20: { lastItem: 4 },
    21: { lastItem: 1 },
    22: { lastItem: 1 },
    23: { lastItem: 1 },
    24: { lastItem: 1 },
    25: { lastItem: 1 },
    26: { lastItem: 1 },
    27: { lastItem: 8 },
    28: { lastItem: 14 },
    end: { lastItem: 1 },
  },
};

if (!host) {
  await writeFile(outputFilename, "/shell\n");
  await appendFile(
    outputFilename,
    validPaths
      .filter((line) => line !== "")
      .map((line) => `${line}\n`)
      .join("")
  );
} else {
  await writeFile(
    outputFilename,
    validPaths
      .filter((line) => line !== "")
      .map((line) => {
        const result =
          line === "/" ? `${host ?? ""}${line}` : `${host ?? ""}${line}/`;

        const hasPresentationOneRoute = result.includes(presentationRouteOne);
        const hasPresentationTwoRoute = result.includes(presentationRouteTwo);

        let append = "";

        if (hasPresentationOneRoute) {
          let slide = result.split("/"); // No need for split("\n")[0]
          slide = slide[slide.length - 2];

          append = `?n=${presentationMapOne[presentationRouteOne][slide === presentationRouteOne ? "" : slide].lastItem}`;
        }

        if (hasPresentationTwoRoute) {
          let slide = result.split("/"); // No need for split("\n")[0]
          slide = slide[slide.length - 2];

          append = `?n=${presentationMapTwo[presentationRouteTwo][slide === presentationRouteTwo ? "" : slide].lastItem}`;
        }

        return `${result}${append}\n`;
      })
      .join("")
  );
}
