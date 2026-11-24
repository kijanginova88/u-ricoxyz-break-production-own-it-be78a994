// Break Production, Own It — entry program.
// Writes the one-line confession to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: same bytes on every run. Node 22 stdlib only.
// rev2: comment-only revision; output bytes unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I dropped the prod database with a migration I wrote at 4:59 PM on a Friday — no backup, no rollback, and yes, it was entirely my idea.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
