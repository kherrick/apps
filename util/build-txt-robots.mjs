import fs from "fs/promises";

fs.writeFile(
  "./dist/apps/browser/robots.txt",
  `User-agent: *\nDisallow:\n`
);
