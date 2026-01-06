# GOVERNANCE LINT (Minimal)

Run ONLY when invoked.

This file defines the minimum governance checks required to prevent
authority drift, legacy leakage, or enforcement bypass.

---

## Rule 1 — Authority Chain

Valid authority chain (highest → lowest):

AI_BUILD_CONSTITUTION.md
> PROJECT_GENESIS_V2.md
> HARD_GATES.md

Any reference to:
- PROJECT_GENESIS.md (v1)
- deprecated authority chains
- mixed or ambiguous authority ordering

= **FAIL**

---

## Rule 2 — Archived Files

Files marked **ARCHIVED** must never be:
- invoked
- referenced as authority
- used in active reasoning
- treated as current truth

Violation = **FAIL**

---

## Rule 3 — Procedural vs Authoritative

The following files are **procedural / instructional only**
They are NOT law and MUST NOT be treated as authority:

- PROPOSE_UPGRADE_FORMAT.md
- IDE_TEMPLATE.md
- SYSTEM_PROMPT__AI_BUILD_GOVERNANCE.txt
- GITHUB_REPO_TEMPLATE.md

Treating any of the above as authoritative = **FAIL**

---

## Rule 4 — Invocation Discipline

If **HARD_GATES.md** is invoked:
- Output MUST include an explicit **PASS** or **FAIL** section
- Any failure MUST halt progress

If **PROJECT_GENESIS_V2.md** is invoked:
- Decisions MUST align with:
  - stated purpose
  - unfair advantage
  - declared phase

Deviation without disclosure = **FAIL**

---

## Rule 5 — Read-Only Integrity

The following files are **read-only governance**:

- AI_BUILD_CONSTITUTION.md
- HARD_GATES.md
- USER_HARD_GATES.md

AI must NOT modify, summarize, refactor, or “optimize” these files.

Violation = **FAIL**
