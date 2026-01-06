# AIBuild OS

A governance-first operating system for building serious software with AI.

This is not a prompt pack.
This is not a framework.
This is not a productivity hack.

AIBuild OS is a set of documents, gates, and formats that let you use AI
as a *real collaborator* without silently lowering standards, losing intent,
or shipping things that only feel good in the moment.

---

## Why This Exists

Modern LLMs are extremely capable and extremely unopinionated.

Left alone, they optimize for:
- speed
- convenience
- “good enough”
- local correctness

That’s fine for experiments.
It fails catastrophically for real products.

AI Build OS exists to solve one problem:

> How do you let AI surprise you **without** letting it quietly lower the bar?

---

## What This Is

AI Build OS is a layered system:

- **AI_BUILD_CONSTITUTION.md**
  Defines the non-negotiable principles and intent.

- **PROJECT_GENESIS_V2.md**
  Defines project-specific truth, tracks evolution, and allows explicit upgrades.

- **HARD_GATES.md**
  Binary, mechanical, non-debatable verification gates.

- **USER_HARD_GATES.md**
  Human-only checks AI cannot perform honestly.

- **SYSTEM_PROMPT__AI_BUILD_GOVERNANCE.txt**
  A reusable system prompt that enforces the above in any LLM or IDE.

- **PROPOSE_UPGRADE_FORMAT.md**
  A controlled way for AI to introduce better ideas without regression.

Together, these form a complete AI collaboration operating system.

---

## What This Is Not

- Not an opinionated tech stack
- Not a replacement for judgment
- Not an automation framework
- Not anti-experimentation

This system explicitly encourages discovery — **with disclosure**.

---

## Who This Is For

- Builders shipping real products
- Solo developers using AI seriously
- Teams tired of refactoring after the fact
- Anyone who cares whether something *deserves* to exist

If you’re just prototyping for fun, this wouldn't hurt, but you don’t need this.
If you’re building things that matter, you probably do.

---

## How To Use This Repo

1. Fork or use this repo as a template
2. Copy `PROJECT_GENESIS_V2.md` for your project
3. Set the system prompt in your IDE or agent
4. Build normally — but with gates
5. Let AI propose upgrades explicitly

You don’t follow this perfectly.
You use it to make failure obvious.

---

## Philosophy (One Sentence)

AI should help you build things worth existing —
not just things that compile.

---

## Invocation Pattern (Critical for Daily Use)

AI Build OS is designed to keep the system prompt lean while allowing
strong governance when it matters.

You do **not** need to paste every governance file into every prompt.

Instead, governance is invoked explicitly when required.

### Invocation Pattern

When governance matters, explicitly reference it.

Example:

Refactor the calculator component.

@PROJECT_GENESIS_V2.md
@HARD_GATES.md

Apply enforcement.

This does three things:
- Keeps the system prompt lean
- Preserves governance salience
- Lets you choose when enforcement matters

If governance is **not** explicitly invoked, discovery mode is assumed.

### Why This Matters

This pattern prevents:
- Context overload in agentic IDEs
- Accidental dilution of governance rules
- Silent regression during refactors

It also allows rapid exploration without sacrificing control when precision is required.

This is the recommended operational mode for Cursor, Antigravity,
and other agentic IDEs.

---

## License / Use

Use it.
Fork it.
Modify it.
Give it away.

If it helps people build better things,
it’s doing its job.
