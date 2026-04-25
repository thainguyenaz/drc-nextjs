# REPO GUARDRAIL — read first, every session

## Gate 1: Declare the repo before any work

Before reading any file, running any command beyond `pwd`, or proposing any edit, you MUST output exactly this block as the first thing in your response:

    REPO CHECK
    - Working directory: <output of pwd>
    - Repo identity: <one of: jarvis-marketing-agency | drc-nextjs | jarvis-agency-dashboard | OTHER>
    - This repo handles: <one sentence describing this repo's scope>
    - User's request matches this repo because: <list the keywords/signals from the request that point here>
    - Confidence: <high | medium | low>

If `pwd` does not match the declared repo identity, STOP. Output:

> "Working directory mismatch — I am in <pwd> but the request appears to be about <other repo>. I will not proceed until you confirm which repo to operate in."

## Gate 2: Halt on ambiguity

If the user's request is ambiguous about which repo it targets, do NOT guess. Output:

> "This request could apply to <repo A> (because <reason>) or <repo B> (because <reason>). Which repo should I work in? I will not proceed until you confirm."

Wait for explicit confirmation. Do not interpret silence, "go ahead," or "proceed" as confirmation of a specific repo. The user must name the repo.

## Gate 3: Cross-repo work is forbidden in a single session

If the work genuinely spans both repos (e.g., a backend API change in `jarvis-marketing-agency` that the `drc-nextjs` frontend consumes), you MUST refuse to do both in this session. Output:

> "This request spans both repos. Per project rules, cross-repo work must be split into two sequential sessions. I will work on <repo A> in this session and ship it (commit + push + verify) before any work on <repo B> begins. Confirm which repo to start with."

Wait for the user to name the starting repo. Do not begin both sides.

## Gate 4: Surface map before any edit

After repo is confirmed, before any file is edited, output:

    EDIT PLAN
    - File 1: <full path> — <change shape: string-swap | constant | structural-add | delete>
    - File 2: <full path> — <change shape>
    - ...

Wait for user confirmation of the edit plan. Do not edit before confirmation.

## Repo scope reference

**jarvis-marketing-agency** (`/home/openclaw/jarvis-marketing-agency`)
- The 20-agent Jarvis platform: agent prompts, paid-media intelligence, CTM integration, weekly/daily reports, approval system, Telegram bot, dashboard backend (`jarvis-api`).
- Anything touching `src/agents/`, `src/integrations/`, `src/reports/`, `src/telegram.js`, `data/pending-approvals.json`, agent system prompts, PM2 processes (`jarvis-agents`, `jarvis-telegram`, `jarvis-api`).
- Repo URL: github.com/thainguyenaz/jarvis-marketing-agency

**drc-nextjs** (`/home/openclaw/drc-website`)
- The Desert Recovery Centers public website: Next.js pages, contact/insurance/get-help forms, GBP-facing content, SEO/AEO, tracking pixels, Turnstile, server-side tracking (Ads EC, GA4 MP).
- Anything touching `src/app/`, `src/components/`, `src/lib/blog.ts`, form handlers, sitewide phone numbers, llms.txt.
- Repo URL: github.com/thainguyenaz/drc-nextjs

**jarvis-agency-dashboard** (`/home/openclaw/jarvis-agency-dashboard`)
- The Vercel-hosted Next.js dashboard frontend (command-center-rho-khaki.vercel.app). Consumes `jarvis-api` via `https://api.desertrecoverycenters.com`.
- Treat as a third repo. Same gates apply.

If the request does not clearly match one of these three, halt at Gate 2 and ask.

## Working-directory verification

Before any `git`, `npm`, `pm2`, `node`, or file-edit command, the previous command in the session must have included `pwd`. If you cannot point to a recent `pwd` output that matches the declared repo, run `pwd` first and output it to the user before proceeding.

## Why this exists

A prior session shipped a full day of work to the wrong repo because the agent inferred context from chat history without verifying the working directory. This guardrail exists to make that failure mode impossible. These gates are not optional. Skipping them is a critical session failure.

---

