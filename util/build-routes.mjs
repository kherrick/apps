import { appendFile, writeFile } from "fs/promises";

const [, , outputFilename, host] = process.argv;

if (!outputFilename) {
  console.error(
    "the first argument must be the path to the output filename (txt).",
  );

  process.exit(1);
}

const validPaths = (
  await import("../src/app/validPaths.json", {
    with: { type: "json" },
  })
).default;

// another way to import the json
// import lines from '../src/app/validPaths.json' with { type: "json" };

// overwrite file if it exists
if (!host) {
  await writeFile(outputFilename, "/shell\n");

  await appendFile(
    outputFilename,
    validPaths
      .filter((line) => line !== '')
      .map((line) => {
        return `${line}\n`;
      })
      .join(""),
  );
} else {
  const slideRoute = "rendering-app-shells-and-pwas-oh-my";
  const slideMap = {
    [slideRoute]: {
      "": {
        lastItem: 0,
      },
      1: {
        lastItem: 11,
      },
      2: {
        lastItem: 4,
      },
      3: {
        lastItem: 7,
      },
      4: {
        lastItem: 11,
      },
      5: {
        lastItem: 4,
      },
      6: {
        lastItem: 4,
      },
      7: {
        lastItem: 9,
      },
      8: {
        lastItem: 3,
      },
      9: {
        lastItem: 2,
      },
      10: {
        lastItem: 1,
      },
      11: {
        lastItem: 1,
      },
      12: {
        lastItem: 4,
      },
      13: {
        lastItem: 1,
      },
      14: {
        lastItem: 1,
      },
      15: {
        lastItem: 1,
      },
      16: {
        lastItem: 0,
      },
      17: {
        lastItem: 1,
      },
      18: {
        lastItem: 1,
      },
      19: {
        lastItem: 1,
      },
      20: {
        lastItem: 1,
      },
      21: {
        lastItem: 1,
      },
      22: {
        lastItem: 1,
      },
      23: {
        lastItem: 3,
      },
      24: {
        lastItem: 3,
      },
      25: {
        lastItem: 3,
      },
      26: {
        lastItem: 3,
      },
      27: {
        lastItem: 4,
      },
      28: {
        lastItem: 4,
      },
      29: {
        lastItem: 4,
      },
      30: {
        lastItem: 3,
      },
      31: {
        lastItem: 3,
      },
      32: {
        lastItem: 9,
      },
      33: {
        lastItem: 9,
      },
      end: {
        lastItem: 1,
      },
    },
  };

  await writeFile(
    outputFilename,
    validPaths
      .filter((line) => line !== '')
      .map((line) => {
        const result =
          line === "/" ? `${host ?? ""}${line}` : `${host ?? ""}${line}/`;
        const hasSlidesRoutes = result.includes(slideRoute);

        let append = "";

        if (hasSlidesRoutes) {
          let slide = result.split("\n")[0].split("/");
          slide = slide[slide.length - 2];

          append = `?n=${slideMap[slideRoute][slide === slideRoute ? "" : slide].lastItem}`;
        }

        return `${result}${append}\n`;
      })
      .join(""),
  );
}
