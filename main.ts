// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes a single quiet, earned moment of pride to /output/entry.txt.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// The gate allows 1–240 characters; keep the bounds named so the check
// reads as a rule, not a magic number.
const MAX_CHARS = 240;
const MIN_CHARS = 1;

const ENTRY =
  "After three years of practice, eight-year-old Jonah signed his first full sentence to his grandmother — and she signed back through tears, without once dropping her teacup.";

// Validate: UTF-8, 1–240 characters, single line, no leading/trailing whitespace.
const chars = [...ENTRY];
if (chars.length < MIN_CHARS || chars.length > MAX_CHARS) {
  throw new Error(`entry must be 1–240 characters, got ${chars.length}`);
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (Buffer.from(ENTRY, "utf8").toString("utf8") !== ENTRY) {
  throw new Error("entry must be valid UTF-8");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
