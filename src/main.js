import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const folder = "files-to-extract";
const fileName = "ParticipantesSTR.csv";
const csvFilePath = join(__dirname, folder, fileName);
const csv = readFileSync(csvFilePath, "utf8");

const lines = csv.split("\n").filter((line) => line.trim().length > 0);
const result = [];

for (let i = 1; i < lines.length; i++) {
  // skip header
  const cols = lines[i].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/); // handles commas inside quotes
  if (cols.length < 7) continue;
  result.push({
    ispb: cols[0].replace(/"/g, "").trim(),
    code: cols[2].replace(/"/g, "").trim(),
    name: cols[5].replace(/"/g, "").trim(),
  });
}

console.log(JSON.stringify(result, null, 2));
const outputDir = "files-results";

if (!existsSync(join(__dirname, outputDir))) {
  mkdirSync(join(__dirname, outputDir));
}

const resultFileName = "bankArray.json";
const outputFilePath = join(__dirname, outputDir, resultFileName);

writeFileSync(outputFilePath, JSON.stringify(result, null, 2));
