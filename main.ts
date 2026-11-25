// The Meeting That Should Have Been an Email
// Writes one funny line about a meeting that should have been an email
// to /output/entry.txt. No network, no randomness, no outside reads.
//
// The joke: the meeting produced nothing except the decision to send an
// email — the very thing the meeting existed to replace. The punch lands
// on the last word, and anyone who has sat in that room recognises it.
//
// The line is checked against the competition gate before it is written:
// 1 to 200 characters, and not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Forty minutes, nine people, and the meeting's only decision was who would send the email.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`Entry line must be 1-200 non-blank characters, got ${line.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
