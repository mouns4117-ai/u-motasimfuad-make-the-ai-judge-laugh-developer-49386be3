// Writes one funny single-line developer excuse to /output/entry.txt.
// The grader runs this program in a sandbox with /output mounted.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const entry = "I promoted the code to production. It resigned on its first day.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
