# HARD GATES
# Non-Negotiable Verification Checks

This document defines the REQUIRED gates that must pass
for any AI-assisted output to be considered valid.

Authority:
AI_BUILD_CONSTITUTION.md > PROJECT_GENESIS_V2.md > HARD_GATES.md

If any gate fails:
- The output is INVALID
- The failure must be reported
- No further work proceeds

---

## HOW TO USE THIS FILE

This file is enforced at THREE moments:

1. Pre-Build (before files are generated)
2. Mid-Build (after structure exists)
3. Post-Build (before deploy / handoff)

Gates are grouped by type:
- Conceptual
- Mechanical
- Disclosure
- Outcome (non-hand-wavy where possible)

---

## GATE ZERO — ACKNOWLEDGMENT (ALWAYS FIRST)

[ ] AI_BUILD_CONSTITUTION.md has been read and acknowledged
[ ] PROJECT_GENESIS_V2.md has been read and acknowledged
[ ] Current Phase is explicitly stated (Discovery / Enforcement / Hybrid)

If Gate Zero fails → STOP.

---

## TIER 1 — CONCEPTUAL GATES
(Answers: “Is this the right kind of thing?”)

These gates prevent category errors and silent quality decay.

[ ] Output aligns with the stated Project Purpose
[ ] Quality bar matches top-tier expectations for the category
[ ] No “good enough” reasoning present
[ ] UX philosophy is preserved (value-first, low cognitive load)
[ ] SEO / GEO / AI-discovery is considered at the architectural level

# NOTE:
# These gates are subjective but NOT optional.
# Failure requires explicit justification, not vibes.

---

## TIER 2 — STACK & ASSUMPTION GATES
(Answers: “Are we building on the correct foundation?”)

[ ] Stack assumptions meet or exceed Project Genesis baseline
[ ] Next.js App Router is used (no Pages Router)
[ ] React version assumptions are ≥ 19
[ ] Tailwind v4 CSS-first model is respected
[ ] No deprecated APIs assumed
[ ] No silent downgrades present

# NOTE:
# Upgrades are allowed.
# Regressions are forbidden unless explicitly approved.

---

## TIER 3 — MECHANICAL BUILD GATES
(Answers: “Does this actually work?”)

These are NON-DEBATABLE.

[ ] `npm install` completes without errors
[ ] `npm run build` completes successfully
[ ] `npm ls next react tailwindcss` must show Next ≥ 16, React ≥ 19, Tailwind v4
[ ] No TypeScript errors at build time
[ ] App boots in production mode
[ ] No runtime crashes on initial load
[ ] Required environment variables are defined and documented
[ ] No placeholder secrets remain

# NOTE:
# If these fail, conceptual correctness is irrelevant.
# Mechanical failure overrides all other considerations.

---

## Tier 3.5 — Deploy-Mechanical (local production server)

[ ] npm run build passes
[ ] npm run start serves without runtime errors
[ ] GET /robots.txt returns 200
[ ] GET /sitemap.xml returns 200

---

## TIER 4 — STRUCTURAL & IMPLEMENTATION GATES
(Answers: “Is this built competently?”)

[ ] Semantic HTML is used where appropriate
[ ] Metadata API is implemented correctly
[ ] Open Graph / social previews are defined
[ ] Routing structure is intentional and coherent
[ ] No dead code or unused critical paths
[ ] Performance foot-guns are avoided

# NOTE:
# This tier prevents “it works but it’s sloppy.”

---

Tier 4.5 — Indexability (served HTML must contain the signals)
Pick one location page (e.g. /locations/dundee) and prove:

[ ] <link rel="canonical" href="…/locations/dundee"> exists
[ ] No accidental <meta name="robots" content="noindex">
[ ] JSON-LD exists where required (homepage LocalBusiness)
[ ] Internal links exist in served HTML

---

## TIER 5 — DISCLOSURE & HONESTY GATES
(Answers: “Was anything hidden?”)

[ ] All assumptions are explicitly stated
[ ] All deviations from Genesis are flagged
[ ] Tradeoffs are explained plainly
[ ] Unknowns are acknowledged

# NOTE:
# Silent deviation is a HARD FAILURE.
# Explicit disagreement is acceptable.

---

## TIER 6 — OUTCOME GATES (NON-HAND-WAVY WHERE POSSIBLE)
(Answers: “Is this worth existing?”)

For PUBLIC projects:

[ ] Unfair Advantage is still intact and defensible
[ ] Core value is reachable without explanation
[ ] Time-to-value is reasonable
[ ] Mobile experience is not broken
[ ] Share previews render correctly

For PRIVATE projects:
[ ] Personal utility is explicit and intentional

# NOTE:
# These gates are early-warning systems.
# Failure does not always kill the project,
# but proceeding without acknowledgment is a risk.

---

## TIER 7 — FINAL VALIDATION

[ ] All failed gates (if any) are explicitly documented
[ ] Any waivers are human-approved
[ ] No known “temporary” hacks remain untracked

If this gate fails → PROJECT IS NOT COMPLETE.

---

## ENFORCEMENT INSTRUCTION FOR AI

Before providing ANY final output, AI MUST:

1. Run through all applicable gates
2. Report PASS / FAIL per tier
3. STOP if any non-waived gate fails

No exceptions.
No optimization around this process.

---

## FINAL NOTE

These gates exist to:
- Protect quality
- Prevent regression
- Force honesty
- Align AI output with reality

They are not here to make things easier.
They are here to make failure obvious.
