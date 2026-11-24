// Writes one funny single-line developer excuse to /output/entry.txt.
// The grader runs this program in a sandbox with /output mounted.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const entry = "I promoted the code to production. It resigned on its first day.";

// Fail fast instead of writing an entry the gate would refuse:
// the entry must be non-blank text of 1-200 characters.
if (entry.trim().length === 0 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
