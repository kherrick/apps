#!/usr/bin/env node

import { DOMParser, XMLSerializer } from "@xmldom/xmldom";
import { readFile, writeFile } from "fs/promises";
import htmlnano from "htmlnano";
import prettier from "prettier";
import sanitizeHtml from "sanitize-html";

import { buildNextItem } from "./build-html-news-next-item.mjs";

const [, , newsProject, shouldMinify] = process.argv;

if (!newsProject) {
  console.error(
    "the first argument must be the news project that contains the appropriate markdown file.",
  );

  process.exit(1);
}

const document = new DOMParser().parseFromString(
  await readFile(`./dist/apps/browser/news/${newsProject}/index.html`, "utf8"),
  // `
  //   <x-placeholder id="latest"><x-placeholder/>
  // `,
  "text/html",
);

const currentLatest = document.getElementById("latest");

const latest = document.createElement("section");
latest.setAttribute('id', 'latest')

const latestHeading = document.createElement('h2');
latestHeading.textContent = 'Latest';
latest.appendChild(latestHeading);

const createElementWithInnerHTML = (tagName, innerHTML) => {
  const tmpTag = document.createElement("span");
  const container = document.createElement(tagName);
  container.appendChild(tmpTag);

  tmpTag.parentNode.replaceChild(
    new DOMParser().parseFromString(sanitizeHtml(innerHTML), "text/html"),
    tmpTag,
  );

  return container;
};

for (const nextItem of await (
  await fetch(`https://kherrick.github.io/${newsProject}/index.json`)
).json()) {
  const [[dateTime, itemComments], [itemTitle, itemLink]] = nextItem;
  const section = await buildNextItem({
    document,
    handleText: (text, itemSection) => {
      if (text) {
        const content = createElementWithInnerHTML(
          "div",
          text.replace(/\0/g, ""),
        );
        content.setAttribute("class", "text");

        itemSection.appendChild(content);
      }
    },
    dateTime,
    itemComments,
    itemLink,
    itemTitle: sanitizeHtml(itemTitle),
    fetchItemDetails: false,
  });

  latest.appendChild(section);
}

const style = document.createElement('style');
style.textContent = `
  #archives {
    display: block;
  }
`;

latest.appendChild(style);

// replace currentLatest with latest
currentLatest?.parentNode.replaceChild(latest, currentLatest);

const preProcessHtmlOutput = (html) =>
  html.replace(
    /^\s*<section xmlns="http:\/\/www\.w3\.org\/1999\/xhtml">\s*|\s*<\/section>\s*$/g,
    "",
  );

writeFile(
  `./dist/apps/browser/news/${newsProject}/index.html`,
  preProcessHtmlOutput(new XMLSerializer().serializeToString(document)),
  "utf8"
);

// writeFile(
//   `./dist/apps/browser/news/${newsProject}/index.html`,
//   shouldMinify === "MINIFY"
//     ? (
//         await htmlnano.process(
//           preProcessHtmlOutput(new XMLSerializer().serializeToString(document)),
//           {
//             mergeScripts: false,
//             mergeStyles: false,
//           },
//           htmlnano.presets.safe,
//         )
//       ).html
//     : await prettier.format(
//         preProcessHtmlOutput(new XMLSerializer().serializeToString(document)),
//         {
//           parser: "html",
//         },
//       ),
//   "utf8",
// );
