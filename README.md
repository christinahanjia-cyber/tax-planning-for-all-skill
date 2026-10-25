# Tax Planning for All

**Start with a few numbers. Explore tax ideas. Understand both the tax impact and the money needed.**

Use last year's return, enter figures yourself, or start with a rough income estimate.

> This skill provides a planning workflow. The private tax calculator is **not included**, so installing the skill alone does not enable dollar estimates.

## Install in Claude

1. [Download the skill ZIP](https://github.com/ebabyxor/tax-planning-for-all-skill/archive/refs/heads/main.zip).
2. In Claude, enable **Code execution and file creation** under **Settings → Capabilities** (called **Create and edit files** in newer settings).
3. Open **Customize → Skills → + → Create skill → Upload a skill**.
4. Upload the ZIP and turn the skill on.
5. Start a new chat and try an example below.

If the upload option is missing, check your organization's skill permissions. [Official Claude instructions](https://support.claude.com/en/articles/12512180-use-skills-in-claude).

## Install in OpenAI Codex

Paste this into a local Codex chat:

```text
Use $skill-installer to install the skill from:
https://github.com/ebabyxor/tax-planning-for-all-skill
The SKILL.md is at the repository root. Install it as tax-planning-for-all.
```

Then start a new chat and type:

```text
$tax-planning-for-all Help me explore my 2026 tax planning options.
```

If it does not appear, restart Codex. Alternatively, unzip the download and place its contents in `~/.agents/skills/tax-planning-for-all/`, with `SKILL.md` directly inside that folder. [Official Codex instructions](https://learn.chatgpt.com/docs/build-skills).

## Try these examples

**Only have a rough number?**

> Use tax-planning-for-all. I am single and expect about $120,000 in wages in 2026. Suggest up to three ideas and explain what else you need. Keep it simple.

**Start with a return**

Attach a redacted PDF, then ask:

> Use tax-planning-for-all. Read my 2025 return and show the main numbers for me to check. Use them as assumptions for 2026, then suggest three strategies to explore.

**Enter your own numbers**

> Use tax-planning-for-all. We file jointly. For 2026, we estimate $180,000 in wages and $20,000 in investment gains. What planning ideas might fit? Label any assumptions.

**Compare tax impact and cash needed**

> Use tax-planning-for-all. Compare an extra $5,000 traditional 401(k) contribution with a $5,000 cash donation. If a compatible calculator is available, show the tax change and cash needed for each. Explain which money remains mine. Otherwise, tell me what to enter in a calculator—do not invent dollar savings.

## What to expect

Up to three relevant ideas, simple explanations, and clear assumptions. Dollar results require a compatible calculator; the included adapter connects only to an authorized local engine. Combined savings must be recalculated, never added together.

**Privacy:** PDFs shared with Claude or Codex follow that platform's data policies. You can use rounded numbers instead. Never post tax returns in this repository.

Educational estimates, not tax advice. Website source and the tax engine remain private. No license to that separate code is granted; a broader reuse license for this package has not yet been selected.
