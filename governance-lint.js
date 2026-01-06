/**
 * Governance Lint — Minimal, Explicit, Non-Ambient
 * Run manually or conceptually when invoked.
 */

import fs from "fs";
import path from "path";

const ROOT = process.cwd();

// ---------- helpers ----------
const fail = (msg) => {
  console.error(`❌ GOVERNANCE LINT FAIL: ${msg}`);
  process.exit(1);
};

const pass = () => {
  console.log("✅ GOVERNANCE LINT PASS");
  process.exit(0);
};

const readFileSafe = (filePath) => {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
};

// ---------- collect root markdown files ----------
const markdownFiles = fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter((d) => d.isFile() && d.name.endsWith(".md"))
  .map((d) => d.name);

// ---------- Rule 1: Authority Chain ----------
for (const file of markdownFiles) {
  const content = readFileSafe(path.join(ROOT, file));

  if (
    content.includes("PROJECT_GENESIS.md") &&
    !content.includes("PROJECT_GENESIS_V2.md")
  ) {
    fail(`${file} references deprecated PROJECT_GENESIS.md (v1)`);
  }
}

// ---------- Rule 2: Archived Files ----------
const archivedGenesisPath = path.join(
  ROOT,
  "AI-BUILD-OS",
  "PROJECT_GENESIS__v1_ARCHIVED.md"
);

if (fs.existsSync(archivedGenesisPath)) {
  const offenders = markdownFiles.filter((file) =>
    readFileSafe(path.join(ROOT, file)).includes(
      "PROJECT_GENESIS__v1_ARCHIVED.md"
    )
  );

  if (offenders.length > 0) {
    fail(
      `Archived Genesis referenced in: ${offenders.join(", ")}`
    );
  }
}

// ---------- Rule 3: Procedural vs Authoritative ----------
const proceduralFiles = [
  "PROPOSE_UPGRADE_FORMAT.md",
  "IDE_TEMPLATE.md",
  "SYSTEM_PROMPT__AI_BUILD_GOVERNANCE.txt",
  "GITHUB_REPO_TEMPLATE.md",
];

for (const file of markdownFiles) {
  const content = readFileSafe(path.join(ROOT, file)).toLowerCase();

  for (const proc of proceduralFiles) {
    if (
      content.includes(proc.toLowerCase()) &&
      content.includes("authority")
    ) {
      fail(
        `${file} treats procedural file ${proc} as authoritative`
      );
    }
  }
}

// ---------- Rule 4: Read-Only Integrity ----------
const readOnlyFiles = [
  "AI_BUILD_CONSTITUTION.md",
  "HARD_GATES.md",
  "USER_HARD_GATES.md",
];

for (const roFile of readOnlyFiles) {
  if (!fs.existsSync(path.join(ROOT, roFile))) {
    fail(`Missing required read-only file: ${roFile}`);
  }
}

// ---------- PASS ----------
pass();
