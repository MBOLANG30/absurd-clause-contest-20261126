import { mkdirSync, writeFileSync } from "node:fs";

const clause =
  "Section 14.2: in the event of a dispute, both parties agree to settle the matter by competitive duck herding at a neutral pond chosen by the Company.";

// Gate: the entry must be one non-blank sentence of 1-200 characters.
if (
  clause.length < 1 ||
  clause.length > 200 ||
  clause.trim().length === 0 ||
  clause.includes("\n")
) {
  throw new Error("entry.txt gate failed: clause must be 1-200 chars, one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", clause, "utf8");
