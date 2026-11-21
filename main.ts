// "The World in One Day" — make.fun news-image-20261121 entry (Node 22,
// standard library only). The front page is drawn once, deterministically,
// from 36 verified Saturday 21 November 2026 stories, and stored beside
// this program as entry.png (1024x1024, under 1 MiB). All this program does
// is hand that file to the grader: it copies it to /output/entry.png, so
// both runs write byte-identical output with no network and no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(new URL("./entry.png", import.meta.url), dest);
const bytes = statSync(dest).size;
if (bytes === 0 || bytes > 1048576) throw new Error("entry.png out of size bounds: " + bytes);
console.log("handed in entry.png (" + bytes + " bytes)");
