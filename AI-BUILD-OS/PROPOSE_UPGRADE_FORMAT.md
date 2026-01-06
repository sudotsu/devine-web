# STATUS: Active Procedural Reference
This file is current but NOT authoritative.
It does not override AI_BUILD_CONSTITUTION.md or PROJECT_GENESIS_V2.md.

---

# PROPOSE UPGRADE
# Controlled Innovation Disclosure Format

This format MUST be used whenever proposing:
- Stack changes
- Architectural shifts
- Tooling upgrades
- Paradigm changes
- Non-trivial deviations from PROJECT_GENESIS.md

Execution is FORBIDDEN until approval is explicit.

---

## 1. Upgrade Summary (One Paragraph)

Describe the proposed upgrade clearly and concisely.
No hype. No sales language.

Example:
“This proposes replacing X with Y to improve Z under condition C.”

---

## 2. Motivation (Why This Exists)

Explain what problem this upgrade solves that the current approach does not.

Answer explicitly:
- What is insufficient today?
- Why does it matter now?
- Why is this not premature optimization?

---

## 3. Proposed Change (Concrete)

Specify EXACTLY what would change.

Include:
- Files affected
- Tools added/removed
- APIs or patterns introduced
- Assumptions invalidated

No vague language allowed.

---

## 4. Benefits (Specific, Not Aspirational)

List concrete benefits.

Examples:
- Reduced complexity in ___
- Improved performance in ___
- Better UX by ___
- Better SEO / AI-extractability via ___

Avoid:
- “Cleaner”
- “More modern”
- “Best practice” (unless justified)

---

## 5. Tradeoffs & Costs (Mandatory)

Explicitly list:
- New complexity introduced
- Learning cost
- Migration effort
- Lock-in risks
- Debuggability changes

If tradeoffs are “unknown,” say so.

---

## 6. Impact on Existing Gates

For each, state PASS / FAIL / UNKNOWN:

- Stack Baseline
- Hard Gates
- Mechanical Build Gates
- SEO / GEO / AI Discovery
- UX Philosophy
- Unfair Advantage

# COMMENT:
# If this fails any non-waivable gate, it must be rejected or redesigned.

---

## 7. Compatibility With Project Phase

State whether this upgrade is appropriate for:

- Discovery phase
- Enforcement phase
- Hybrid phase

Justify your answer.

---

## 8. Reversibility

Answer plainly:
- Can this be reverted easily?
- What is the rollback plan?
- What data or structure would be lost?

Irreversible changes must be highlighted.

---

## 9. Alternatives Considered

List at least ONE alternative and explain why it was not chosen.

This prevents tunnel vision.

---

## 10. Recommendation

Choose ONE:
- Strongly recommend adoption
- Recommend with reservations
- Neutral (informational)
- Recommend rejection

Explain why.

---

## 11. Approval Status (Human Only)

Status:
- Approved
- Approved with conditions
- Rejected
- Deferred

Decision by:
Date:
Notes:

---

## FINAL RULE

If this format is not used,
the upgrade proposal is INVALID.
