# Screenshots

Drop image files here and reference them from `data/projects.js`:

```js
shots: [
  { src: "qc-extractor-report.png",
    caption: { en: "Extraction log view", zh: "擷取紀錄檢視" } }
]
```

## Guidelines

- **PNG** for UI screenshots, **JPG** for photos. Keep each under ~400 KB.
- Roughly 3:2 landscape crops look best in the thumbnail strip.
- 1–3 images per project is plenty.

## Before adding any work screenshot — blur or replace

- [ ] Client and company names, logos
- [ ] Real sample IDs and report numbers
- [ ] Analyst / personnel names
- [ ] File paths, server names, UNC paths, IP addresses
- [ ] Email addresses
- [ ] Actual result values tied to a real client job
- [ ] Browser tabs, taskbars and window titles revealing internal systems

The safest approach is to **run the tool against invented demo data** and screenshot
that, rather than blurring a real screen. Blur can be reversed; fake data cannot.

A short screen-recording GIF (use ScreenToGif) is even more effective than a static
image — but the same rules apply.
