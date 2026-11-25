// Fridge Roast: one line, biggest laugh.
// The fridge as a nightclub bouncer: its light is always on for everyone
// else, but at 3am it sizes up my leftovers and decides I am not on the list.
// The joke lands because the fridge is the one appliance that never sleeps,
// never forgives, and always knows exactly what you ate yesterday.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const line =
  "The fridge light stays on for everyone but me. At 3am it judges my leftovers like a bouncer who already knows I'm not on the list.";

if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
