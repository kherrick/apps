#!/usr/bin/env node

import crypto from "crypto";
import { createReadStream, createWriteStream, promises as fs } from "fs";
import { dirname, join } from "path";
import * as tar from "tar";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const FILE = "package";
const HOST = "https://staticimgly.com";
const INTENT = "background-removal";
const RESOURCE_FILE = "resources.json";
const SCOPE = "@imgly";
const VERSION = "1.6.0";
const INTENT_DATA = `${INTENT}-data`;
const PKG_DATA = `${SCOPE}/${INTENT_DATA}`;
const PACKAGE_URL = `${HOST}/${PKG_DATA}/${VERSION}/${FILE}.tgz`;
const ASSETS_DIR = join(__dirname, "..", "src", "assets");
const EXTRACT_DIR = join(ASSETS_DIR, `${INTENT}-${FILE}`);
const PACKAGE_FILE = join(ASSETS_DIR, `${INTENT}-${FILE}.tgz`);
const FINAL_DATA_DIR = join(ASSETS_DIR, `${INTENT_DATA}`);
const FINAL_RESOURCES_FILE = join(FINAL_DATA_DIR, RESOURCE_FILE);
const EXTRACT_RESOURCES_DIR = join(EXTRACT_DIR, FILE, "dist");
const EXTRACT_RESOURCES_FILE = join(EXTRACT_RESOURCES_DIR, RESOURCE_FILE);

function getSHA256ByFilePath(path) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const stream = createReadStream(path);

    stream.on("error", reject);
    hash.on("error", reject);

    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => resolve(hash.digest("hex")));
  });
}

function getSpinner() {
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const index = Math.floor(Date.now() / 100) % frames.length;

  return frames[index];
}

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
}

async function fileExists(file) {
  let fileExists;

  try {
    await fs.access(file);
    fileExists = true;
  } catch {
    fileExists = false;
  }

  return fileExists;
}

async function isDirEmpty(dir) {
  try {
    const files = await fs.readdir(dir);

    return files.length === 0;
  } catch (err) {
    throw err;
  }
}

async function filterResourcesJson(jsonPath) {
  let raw;
  try {
    raw = await fs.readFile(jsonPath, "utf8");
  } catch (err) {
    throw new Error(`Could not read resources.json: ${err.message}`);
  }

  let resources;
  try {
    resources = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Could not parse resources.json: ${err.message}`);
  }

  const filtered = Object.fromEntries(
    Object.entries(resources).filter(
      ([key]) =>
        key.includes("onnxruntime-web") || key.includes("isnet_quint8"),
    ),
  );

  const filteredStr = JSON.stringify(filtered, null, 2);

  if (filteredStr !== raw.trim()) {
    await fs.writeFile(jsonPath, filteredStr, "utf8");
  }

  return filtered;
}

async function areResourcesValid(resources, dir) {
  for (const resource of Object.values(resources)) {
    for (const chunk of resource.chunks) {
      const file = join(dir, chunk.hash);
      if (!(await fileExists(file))) return false;

      const sum = await getSHA256ByFilePath(file);
      if (chunk.hash !== sum) return false;
    }
  }

  return true;
}

async function downloadFile(url, dest) {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);

  await ensureDir(join(__dirname, "..", "src", "assets"));

  const contentLength = parseInt(
    response.headers.get("content-length") || "0",
    10,
  );

  let downloaded = 0;

  const writer = createWriteStream(dest);
  const reader = response.body.getReader();

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    downloaded += value.length;

    const percent =
      contentLength > 0 ? ((downloaded / contentLength) * 100).toFixed(1) : 0;

    process.stdout.write(`\rDownloading... ${percent}% ${getSpinner()}`);

    writer.write(value);
  }
  writer.end();

  process.stdout.write("\r");
  console.log("\nDownload complete!");

  const stats = await fs.stat(dest);

  if (stats.size === 0) throw new Error("Downloaded file is empty");

  return dest;
}

async function extractTgz(source, dest) {
  await ensureDir(dest);

  await tar.x({ file: source, cwd: dest });
}

async function removeUnusedFiles(resources, dir) {
  const valid = new Set(
    Object.values(resources).flatMap((r) => r.chunks.map((c) => c.hash)),
  );

  const files = await fs.readdir(dir);

  await Promise.all(
    files
      .filter((f) => f !== "resources.json" && !valid.has(f.split(".")[0]))
      .map((f) => fs.unlink(join(dir, f))),
  );
}

async function main() {
  const hasFinalResourcesFile = await fileExists(FINAL_RESOURCES_FILE);

  if (hasFinalResourcesFile) {
    const resourceFile = await filterResourcesJson(FINAL_RESOURCES_FILE);

    const isReady = await areResourcesValid(resourceFile, FINAL_DATA_DIR);

    if (isReady) {
      console.log("Background removal data ready.");

      return;
    }
  }

  if (!hasFinalResourcesFile) {
    const hasPackageFile = await fileExists(PACKAGE_FILE);

    if (!hasPackageFile) {
      await downloadFile(PACKAGE_URL, PACKAGE_FILE);
    }
  }

  await extractTgz(PACKAGE_FILE, EXTRACT_DIR);

  await removeUnusedFiles(
    await filterResourcesJson(EXTRACT_RESOURCES_FILE),
    EXTRACT_RESOURCES_DIR,
  );

  try {
    try {
      await fs.rm(FINAL_DATA_DIR, { recursive: true, force: true });
    } catch (err) {}

    await ensureDir(ASSETS_DIR);
    await fs.rename(EXTRACT_RESOURCES_DIR, FINAL_DATA_DIR);

    try {
      await fs.rm(EXTRACT_DIR, { recursive: true, force: true });
    } catch (err) {}

    console.log("Background removal data ready.");
  } catch (err) {
    console.error("Error:", err.message);

    process.exit(1);
  }
}

main();
