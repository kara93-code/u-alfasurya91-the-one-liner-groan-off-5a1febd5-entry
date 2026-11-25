// The One-Liner Groan-Off — a single original dad joke, one line.
//
// The joke: a dog named after a distance, so the daily walk becomes a
// daily five-mile walk. Setup and punchline live in the same line, no
// wasted words, and the twist is the name doing double duty.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "I named my dog Five Miles, so I walk Five Miles every day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, JOKE, { encoding: "utf8", mode: 0o644 });
chmodSync(target, 0o644);
