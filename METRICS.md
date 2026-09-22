# Impact Metrics — what to fill in

A recruiter skims your portal for about 30 seconds. Numbers are what survive that skim.
This is the highest-return edit you can make to the site, so it is worth the effort to
work the figures out.

## The formula

> **What was slow → what it is now → at what scale**

Examples of the transformation:

| Weak | Strong |
|---|---|
| "Automates report generation" | "Cut report prep from ~25 min to ~2 min per batch, ~40 batches/day" |
| "Monitors data integrity" | "Audits ~2,000 instrument files daily; flagged 30+ timestamp anomalies in first quarter" |
| "Reduces manual entry" | "Removed ~1,500 manual keystrokes per analyst per day" |
| "Used by the team" | "In daily production use by 15 analysts across 2 laboratories since 2024" |

## How to estimate honestly

You do not need audited figures. You need **defensible** ones:

1. Time one manual run yourself with a stopwatch.
2. Time the automated run.
3. Multiply by a volume you actually know (batches/day, reports/week).
4. Round **down** and prefix with `~`.

If challenged in interview, "I timed it myself over a week, roughly" is a perfectly
good answer. What you must never do is invent a number you cannot explain — that is
the one thing that reliably loses an offer.

## Safe to publish?

Throughput and time-saving figures are generally safe. Avoid anything that reveals:

- Client names or client volumes
- Revenue, pricing or cost figures
- Headcount in a way that implies confidential business information
- Failure or deviation rates (these can be commercially sensitive)

"~40 batches/day" is fine. "SGS Taiwan FCM processes 40 batches/day for [client]" is not.

## Where to put them

In `data/projects.js`, set the `metrics` field:

```js
metrics: {
  en: "~25 min -> ~2 min per batch \u00B7 ~40 batches/day",
  zh: "每批次約 25 分鐘 → 約 2 分鐘 · 每日約 40 批次"
}
```

Leave it as `null` until you have a real figure. An empty metrics line is much
better than a fabricated one.

## Priority order

Fill these four first — they carry the portfolio:

1. `qc-extractor`
2. `aida`
3. `edge-extension-lims`
4. `scale-monitor`

## Also reuse these on your CV

The same sentences belong in your CV bullets. Portal and CV should say the same
numbers, so the manager sees consistency.
