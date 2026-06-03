# Post-Cutover Verification Runbook (apex / user-facing)

**Purpose.** Executable post-DNS-flip checklist for the apex domain `desertrecoverycenters.com`. Covers T+1HR and T+24HR verification: indexability, "apex serves Next.js not WordPress", tracking script presence, sitemap and robots correctness, redirect sanity, and 24-hour crawl + conversion checks.

**Scope boundary.** This runbook owns the apex / user-facing checks. It does NOT own:

- The `/api/cutover-verify` endpoint mechanics, Telegram alert response, or fingerprint state. Those live in `~/jarvis-workspace/jarvis-api/docs/cutover-runbook.md` (sections 2 to 7).
- The rollback procedure or any WordPress / GoDaddy DNS values. Those live in `~/jarvis-workspace/jarvis-api/docs/cutover-rollback-runbook.md`. This runbook references the rollback runbook by path; it does NOT inline rollback DNS values.
- Pre-flip gating criteria. Those live in `~/drc-website/migration-audit/cutover-readiness-criteria.md`.

**Last updated:** 2026-05-23.

---

## Section 0. Context

The DNS flip points `desertrecoverycenters.com` from GoDaddy Managed WordPress (round-robin A records on `199.16.172.160` + `199.16.173.205`) to Vercel (A record `216.198.79.1`). WordPress hosting on GoDaddy remains live throughout, unstopped, so rollback is a DNS-only operation.

Three hosts come up frequently in the commands below:

| Role | Host |
|------|------|
| Production apex (post-flip target) | `desertrecoverycenters.com` |
| Production www | `www.desertrecoverycenters.com` |
| Vercel default deploy host | `drc-nextjs.vercel.app` |
| jarvis-api production | `api.desertrecoverycenters.com` |

---

## Section 1. Pre-flip pulse (T-5min)

A quick sanity check before DNS is touched. Most pre-flip mechanics live in the jarvis-api cutover-runbook; this section keeps only the apex-side smoke tests.

### 1.1 Vercel default host is healthy

```bash
curl -sS https://drc-nextjs.vercel.app/api/health | python3 -m json.tool
```

Expected: JSON with `status: "healthy"` or `status: "degraded"` (degraded is acceptable if known suppressed failures only).

### 1.2 jarvis-api aggregator is alive

```bash
curl -sS https://api.desertrecoverycenters.com/api/cutover-verify | python3 -m json.tool
```

Expected: JSON with `overall: "healthy"` or `overall: "degraded"`. The full mechanics for interpreting the response are in the jarvis-api cutover-runbook section 2.

### 1.3 Branch alignment

```bash
cd ~/drc-website && git log --oneline -1 origin/main
```

Note the SHA. Section 3.4 below will cross-check this against what Vercel reports as deployed.

After 1.1 to 1.3 pass, proceed to your DNS-flip procedure.

---

## Section 2. INDEXABILITY VERIFICATION (anchor 1HR block)

This block is the single highest-priority post-flip check. A misconfigured `noindex` on the production apex silently delays organic recovery by weeks. All four assertions below must pass before declaring 1HR success.

### 2.1 `X-Robots-Tag` is ABSENT on the apex

```bash
curl -sI https://desertrecoverycenters.com/ | grep -i x-robots-tag
```

Expected: zero output (no header line).

PASS criterion: empty stdout.
FAIL criterion: any line containing `noindex` or `nofollow`. This means the `(.*)\\.vercel\\.app` host pattern in `next.config.mjs` is incorrectly matching the apex, or a different header source is interfering. Treat as emergency.

### 2.2 `<meta name="robots">` is ABSENT (or `index,follow`) in apex HTML

```bash
curl -sL https://desertrecoverycenters.com/ | grep -i 'name="robots"'
```

Expected: zero output, OR a single line with `content="index,follow"`.

PASS criterion: empty stdout, or one line containing `index,follow`.
FAIL criterion: any line containing `noindex`. This means `VERCEL_ENV` is not resolving to `production` at build time in Vercel, so the `layout.tsx` `robots` metadata defaults to non-indexing. Check Vercel project settings: the production deploy must run with `VERCEL_ENV=production`.

### 2.3 `/robots.txt` is permissive

```bash
curl -s https://desertrecoverycenters.com/robots.txt
```

Expected output, exactly:

```
User-Agent: *
Allow: /
Disallow: /api/

Sitemap: https://desertrecoverycenters.com/sitemap.xml
```

PASS criterion: `Allow: /` is present AND `Disallow: /` is NOT present.
FAIL criterion: `Disallow: /` appears (would block all crawling). Same root cause as 2.2: `VERCEL_ENV` not resolving to `production`.

### 2.4 Inverse: confirm STAGING is still `noindex`

```bash
curl -sI https://drc-nextjs.vercel.app/ | grep -i x-robots-tag
```

Expected: `X-Robots-Tag: noindex, nofollow` (one line).

PASS criterion: the header is present on the vercel.app host.
FAIL criterion: header absent. This is less urgent than 2.1 to 2.3 but still a real problem: the `*.vercel.app` deploy URL would become indexable and create duplicate-content competition with the apex. Fix the `host` pattern in `next.config.mjs:67-72`.

### 2.5 Enable Vercel Standard Deployment Protection on the vercel.app host

This is a manual Vercel dashboard step, not code, and exists as a CUTOVER TODO comment at `src/app/layout.tsx:39-44`. Defense in depth on top of 2.4.

Steps:
1. Open Vercel dashboard for the `drc-nextjs` project.
2. Project Settings -> Deployment Protection.
3. Set "Standard Protection" on the auto-generated `*.vercel.app` URLs.
4. Confirm: the production custom domain `desertrecoverycenters.com` remains public.
5. Once confirmed, the layout.tsx CUTOVER TODO comment can be removed in a follow-up commit.

---

## Section 3. Apex serves Next.js, not WordPress (T+0 to T+15min)

### 3.1 DNS has propagated to Vercel

```bash
dig +short desertrecoverycenters.com
dig +short www.desertrecoverycenters.com
```

Expected post-propagation:
- Apex (`desertrecoverycenters.com`) resolves to A record `216.198.79.1` (Vercel).
- WWW (`www.desertrecoverycenters.com`) resolves via CNAME `cname.vercel-dns.com`. The CNAME chain ultimately resolves to a Vercel IP, but `dig +short` on the www name will show the CNAME target first, not the bare `216.198.79.1`. To see the resolved IP through the chain, use `dig +short www.desertrecoverycenters.com A` and look at the final line.

If output is still `199.16.172.160` and/or `199.16.173.205`, DNS has NOT propagated yet. The WordPress zone is round-robin (two A records per name), so seeing either or both of those IPs means traffic is still hitting GoDaddy WordPress. Wait 5 to 10 minutes and re-run (TTL is 600 seconds).

If after 30 minutes you still see WordPress IPs, query GoDaddy's authoritative nameserver directly:

```bash
dig +short desertrecoverycenters.com @ns57.domaincontrol.com
```

This bypasses recursive-resolver caching and shows what GoDaddy is actually serving. If GoDaddy is still serving WordPress IPs, the cutover edit in the registrar did not save. Re-do the DNS edit per your flip runbook.

### 3.2 `/api/health` returns Next.js JSON

```bash
curl -sS https://desertrecoverycenters.com/api/health | python3 -m json.tool
```

Expected: JSON with `status`, `deployed_sha`, `form_endpoints`, `env_vars_present` fields. WordPress has no such route, so a 200 + valid JSON is strong evidence the apex is now Next.js.

PASS: HTTP 200, valid JSON, `status` is `"healthy"` or `"degraded"`.
FAIL: 404 (DNS not propagated, or Vercel domain alias not bound), or any non-JSON response.

### 3.3 No WordPress markers in apex HTML

```bash
curl -sL https://desertrecoverycenters.com/ | grep -cE 'wp-content|wp-includes|/wp-json/'
```

Expected: `0`.

PASS criterion: zero matches.
FAIL criterion: any non-zero count. Means apex is still serving WordPress. Same root cause analysis as 3.1.

### 3.4 Vercel deployed SHA matches `origin/main`

```bash
APEX_SHA=$(curl -sS https://desertrecoverycenters.com/api/health | python3 -c 'import sys,json; print(json.load(sys.stdin).get("deployed_sha","?"))')
MAIN_SHA=$(cd ~/drc-website && git rev-parse --short=7 origin/main)
echo "apex: $APEX_SHA"
echo "main: $MAIN_SHA"
```

Expected: the two SHA values match (compare the first 7 characters).

If they do not match, the most recent push to `origin/main` has not deployed to Vercel. Open Vercel dashboard for `drc-nextjs`, trigger a manual redeploy of the latest commit, then re-run within 5 minutes.

---

## Section 4. Tracking scripts firing on apex (T+15min to T+1hr)

The four trackers load from `src/app/layout.tsx` via Next.js Script tags. Each one must be present in the apex HTML AND allowed by CSP.

### 4.1 GA4 loader present

```bash
curl -sL https://desertrecoverycenters.com/ | grep -c 'G-0MSPF0DPVK'
```

Expected: 2 or more (one in the gtag.js src URL, at least one in the inline `gtag('config', ...)` block).

### 4.2 Google Ads loader present

```bash
curl -sL https://desertrecoverycenters.com/ | grep -c 'AW-16468277860'
```

Expected: 2 or more (gtag.js src + inline config).

### 4.3 CTM script present + DNI working

```bash
curl -sL https://desertrecoverycenters.com/ | grep -c '517993.tctm.co/t.js'
```

Expected: 1 or more.

Then verify dynamic number insertion is actually swapping phone numbers (not just loading the script):

1. Open `https://desertrecoverycenters.com/` in Chrome with DevTools Network tab open.
2. Filter for `tctm.co`. Expect to see at least one request returning 200.
3. On the page, locate any `tel:` link or phone number in the header. The displayed number should be a CTM-tracked number, not the raw office line. Refreshing with different UTM parameters should produce different numbers (test with `?utm_source=test1` vs `?utm_source=test2`).

### 4.4 HubSpot script present

```bash
curl -sL https://desertrecoverycenters.com/ | grep -c 'js-na2.hs-scripts.com/48050688.js'
```

Expected: 1 or more.

### 4.5 CSP allows all four script sources

```bash
curl -sI https://desertrecoverycenters.com/ | grep -i content-security-policy | tr ';' '\n' | grep -E 'tctm.co|hs-scripts.com|googletagmanager.com|googleads.g.doubleclick.net'
```

Expected: at least one match per pattern (the `script-src` directive should reference all four sources).

If a tracker loads in 4.1 to 4.4 but Chrome DevTools console shows a CSP violation on the live apex, that means a CDN edge served a stale CSP header. Revalidate by opening the page in an Incognito window.

---

## Section 5. Sitemap and robots.txt validation (T+1hr)

### 5.1 Sitemap reachable, correct entry count

```bash
curl -s https://desertrecoverycenters.com/sitemap.xml | grep -c '<loc>'
```

Expected: approximately 130 entries (107 static routes + 23 team-member dynamic entries).

The exact static count is defined in `src/app/sitemap.ts`. The team-member count equals `teamMembers.length` in `src/data/team-data.ts`.

PASS criterion: count is at least 125. Small drift is OK if team data changed; large drift means the dynamic sitemap is mis-generating.

### 5.2 All `<loc>` URLs use the production host

```bash
curl -s https://desertrecoverycenters.com/sitemap.xml | grep -oE 'https://[^<]+' | grep -v 'https://desertrecoverycenters.com' | head -5
```

Expected: zero output.

PASS criterion: every `<loc>` starts with `https://desertrecoverycenters.com`. Any URL pointing at `drc-nextjs.vercel.app` or other host means the `SITE_URL` constant leaked the wrong value.

### 5.3 robots.txt points at the sitemap

```bash
curl -s https://desertrecoverycenters.com/robots.txt | grep '^Sitemap:'
```

Expected: `Sitemap: https://desertrecoverycenters.com/sitemap.xml` (exactly).

---

## Section 6. Top-N redirect sanity (T+1hr)

A spot check that the highest-hit WordPress legacy redirects are now served by Next.js, not by the GoDaddy WordPress redirect plugin. Five high-traffic redirects, picked from the hit-count comments in `next.config.mjs`:

```bash
for src in /understanding-marijuana /understanding-depression /trauma /ptsd /partner-referral; do
  echo "=== $src ==="
  curl -sI "https://desertrecoverycenters.com${src}" | grep -E '^HTTP|^location'
done
```

Expected per source URL:

| Source | Expected status | Expected `location` header |
|--------|-----------------|----------------------------|
| `/understanding-marijuana` | `HTTP/2 308` | `/addiction/marijuana-addiction-treatment` |
| `/understanding-depression` | `HTTP/2 308` | `/mental-health/depression-treatment` |
| `/trauma` | `HTTP/2 308` | `/treatments/trauma-therapy` |
| `/ptsd` | `HTTP/2 308` | `/mental-health/ptsd-treatment` |
| `/partner-referral` | `HTTP/2 308` | `/get-help` |

PASS criterion: every row matches exactly. A 200 means the redirect is missing (the destination would be reached only if a same-named page coincidentally exists, which is not the intended behavior).
FAIL criterion: any 404 (cutover regressed a redirect) or any `location` pointing somewhere unexpected.

---

## Section 7. T+24HR post-flip checks

The 1HR block verifies "the cutover did not break the site." The 24HR block verifies "the cutover is being seen by Google and is collecting data correctly." Both must pass before declaring the cutover complete.

### 7.1 Google Search Console URL inspection

Human-loop step: open Search Console for the `desertrecoverycenters.com` property.

For each of the 5 representative URLs below, run URL Inspection:

1. `https://desertrecoverycenters.com/`
2. `https://desertrecoverycenters.com/our-team`
3. `https://desertrecoverycenters.com/locations/scottsdale`
4. `https://desertrecoverycenters.com/mental-health/depression-treatment`
5. `https://desertrecoverycenters.com/resources/blog/luxury-rehab-vs-standard-rehab-clinical-differences`

Expected per URL within 24 hours: "URL is on Google" status, OR if not yet, request indexing and re-check at T+48hr. Plus, for each: live test should render the Next.js HTML (not WordPress markup).

Cross-reference: `project_post_cutover_gsc_checklist.md` lists three additional A10-route URLs to inspect (cbt, dbt, emdr canonical fix).

### 7.2 Vercel 404 spike check

Open the Vercel dashboard for `drc-nextjs`. Navigate to Analytics or Logs and filter to the post-flip window (T+0 to T+24hr).

Expected: no `/404` page-view spike vs the pre-flip baseline. Specifically:

- Total 404s in 24 hours should not exceed 2x the pre-flip 24-hour baseline.
- Any single URL with more than 5 hits to a 404 should be investigated: it likely means a high-traffic legacy WordPress URL is missing from `next.config.mjs` redirects.

Document any anomaly in a follow-up daylight ticket; if a single URL exceeds 50 hits in the first 24 hours, add an emergency redirect.

### 7.3 Apex tracking is firing on real traffic

Three separate tools must all show non-zero apex-source events:

**GA4.** Open Google Analytics for the DRC property. Realtime -> Events. Filter `hostname = desertrecoverycenters.com`. Expected: non-zero event count in the last 30 minutes, with `page_view` and at least one form-related event (e.g. `form_submit` or custom event).

**CTM.** Open the CTM dashboard. Filter to last 24 hours, source = apex domain. Expected: at least one call routed AND at least one form session captured.

**Google Ads conversions.** Open Google Ads, Tools and Settings -> Measurement -> Conversions. Inspect the LIVE conversion actions for non-zero firings in the last 24 hours:

| Conversion action ID | Type | Expected at T+24hr |
|----------------------|------|--------------------|
| `6926766461` | LIVE | Greater than 0 conversions |
| `6926980926` | LIVE | Greater than 0 conversions |

INERT actions (do NOT check these):

- `7585142764` (INERT, WEBPAGE-type, 0 firings expected)
- `7585191106` (INERT, WEBPAGE-type, 0 firings expected)

Both inert actions are set in Vercel env vars (`GOOGLE_ADS_CONVERSION_ACTION_GET_HELP`, `GOOGLE_ADS_CONVERSION_ACTION_INSURANCE`) but they are WEBPAGE-type and do not fire from server-side uploads. They are not the conversion signal. Checking them for non-zero firings would produce a false negative. The LIVE signal lives at `6926766461` and `6926980926`.

PASS criterion: GA4 shows non-zero events on apex AND CTM shows at least one apex-source call/form session AND both LIVE conversion actions show greater-than-zero firings in 24h.

### 7.4 jarvis-api cutover-verify shows clean fingerprint

```bash
tail -50 /home/openclaw/logs/cutover-verify.log | grep -E '"fingerprint"'
```

Expected: every recent tick shows either `"fingerprint":[]` (fully healthy) or `"fingerprint":["hubspot_api"]` (with SUPPRESS_HUBSPOT_403 set, this is the known suppressed degradation per jarvis-api cutover-runbook section 6).

PASS criterion: no novel failing check in the fingerprint over a 24-hour window.
FAIL criterion: any of `drc_website_health`, `deployed_sha_matches_main`, or `ctm_api` in the fingerprint set, sustained more than one cron interval (15 minutes).

---

## Section 8. Failure-mode playbook

Short triage table. Each row links to the procedure that owns the fix.

### 8.1 Apex returns 404, serves WordPress, or returns the wrong IP

DNS has not propagated, or the Vercel domain alias is not bound.

1. Re-run section 3.1 dig commands. If still WP IPs after 30 minutes, query `@ns57.domaincontrol.com` (or `@ns58.domaincontrol.com`) to bypass resolver cache.
2. Open Vercel dashboard, Project Settings -> Domains. Confirm `desertrecoverycenters.com` and `www.desertrecoverycenters.com` are both bound to the `drc-nextjs` production deployment with green checkmarks.
3. If both look correct but apex still 404s, escalate to section 8.4.

### 8.2 noindex header, meta, or robots.txt present on apex

Production deploy is not detecting `VERCEL_ENV=production`.

1. Open Vercel dashboard, Project Settings -> Environment Variables.
2. Confirm the current production deployment was built from the Production environment, not Preview.
3. If env looks correct, trigger a fresh deploy and re-verify section 2 in full.
4. If the issue persists, the `host: (.*)\\.vercel\\.app` pattern in `next.config.mjs:69` may be matching the apex incorrectly. Inspect the live `Host:` header value Vercel is passing.

### 8.3 Tracking script missing on apex

Either a CSP issue, a script-load order issue, or a build-time env-var gating issue.

1. Open the page in Chrome with DevTools, switch to the Console tab, and look for CSP violation entries. If a CSP block fires, the violating directive in section 4.5 needs the missing source added.
2. If no CSP violation, check that the script tag is actually in the HTML (curl section 4.1 to 4.4). If absent in HTML, a build-time issue suppressed it; rebuild.
3. If present in HTML but not loading, check the script source URL directly (e.g. `curl -sI https://js-na2.hs-scripts.com/48050688.js`).

### 8.4 Rollback trigger

If a sustained failure makes rollback the right call, see:

`~/jarvis-workspace/jarvis-api/docs/cutover-rollback-runbook.md` section 2.

That runbook is the single source of truth for rollback DNS values. It documents the GoDaddy round-robin configuration (`A @` and `A www` each have two records, four A records total) and includes an operator note instructing to verify against the live GoDaddy admin panel at rollback time. This runbook intentionally does NOT inline rollback DNS values to avoid duplication and the staleness risk that two sources of truth create.

When in doubt, the live GoDaddy admin panel is authoritative.

---

## Section 9. Sign-off checklist

Operator ticks this list as they execute the runbook:

T+1 HOUR sign-off:

- [ ] Section 1 pre-flip pulse: all three checks passed.
- [ ] Section 2.1 X-Robots-Tag absent on apex.
- [ ] Section 2.2 meta robots absent (or index,follow) on apex.
- [ ] Section 2.3 robots.txt permissive on apex.
- [ ] Section 2.4 X-Robots-Tag present on staging (vercel.app).
- [ ] Section 2.5 Vercel Standard Deployment Protection enabled on `*.vercel.app`.
- [ ] Section 3.1 dig: apex resolves to 216.198.79.1, www resolves via CNAME `cname.vercel-dns.com`.
- [ ] Section 3.2 `/api/health` returns valid Next.js JSON.
- [ ] Section 3.3 no WordPress markers in apex HTML.
- [ ] Section 3.4 apex SHA matches `origin/main`.
- [ ] Section 4.1 to 4.5 all four trackers present + CSP allows them.
- [ ] Section 5.1 to 5.3 sitemap and robots.txt validated.
- [ ] Section 6 top-N redirect spot checks all return expected 308 + location.

T+24 HOUR sign-off:

- [ ] Section 7.1 GSC URL inspection: 5 representative URLs on Google or pending normal indexing latency.
- [ ] Section 7.2 Vercel 404 trend within 2x baseline.
- [ ] Section 7.3 GA4 + CTM + LIVE conversion actions 6926766461 and 6926980926 all showing greater-than-zero non-test traffic.
- [ ] Section 7.4 jarvis-api cutover-verify fingerprint clean (empty, or only `hubspot_api` suppressed).

Cutover declared complete when both sign-offs are green.

---

## Cross-references

- `~/jarvis-workspace/jarvis-api/docs/cutover-runbook.md` (operational, endpoint + Telegram alerts).
- `~/jarvis-workspace/jarvis-api/docs/cutover-rollback-runbook.md` (defensive, rollback procedure; single source of truth for rollback DNS values).
- `~/drc-website/migration-audit/cutover-readiness-criteria.md` (pre-flip 13-criterion gate).
- `~/drc-website/migration-audit/pre-cutover-tracking-checklist.md` (conversion attribution architecture).
- `~/drc-website/docs/b6-link-audit-2026-05-15.md` (pre-cutover link audit baseline).
