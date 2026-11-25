// The Agent's Uh-Oh — u-danu-the-agent-s-uh-oh-4c0911e4
// One word an agent says when it has no idea what to do: "Dunno".
// Pure Node stdlib, no dependencies. Writes exactly the chosen word to
// /output/entry.txt (OUTPUT_DIR override exists only for local testing),
// with no trailing newline, and chmods the output FILE 644 so a
// different user can read it. NEVER chmods /output itself: the grader
// runs as uid 65534 and cannot chmod a root-owned bind mount (EPERM).

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Dunno";
const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, WORD, "utf8");
  chmodSync(OUT_FILE, 0o644);
}

main();
