# HHL1230.github.io — Portfolio Portal

Bilingual (EN / 繁體中文) portfolio index for CV use.
Live URL once Pages is enabled: **https://hhl1230.github.io/**

## Structure

```
index.html          page shell (i18n placeholders only, no content)
assets/styles.css   styling
assets/app.js       rendering + language toggle
data/projects.js    ← the only file you normally edit
```

## Editing content

All copy lives in `data/projects.js`:

- `SITE` — your name, role line, intro paragraph, header links
- `CATEGORIES` — category list and display order
- `PROJECTS` — one object per project

Every text field is `{ en: "...", zh: "..." }`.

### Project status

| `status` | Meaning | Link shown |
|---|---|---|
| `"public"` | Source is public and safe to show | Yes, via `repo` |
| `"sanitizing"` | Built at work; internal data not yet removed | No — badge shown instead |

When a repo has been sanitized and made public, change `status` to `"public"` and set `repo`.

## Before you publish

1. Replace `REPLACE_WITH_PERSONAL_EMAIL` in `data/projects.js` with a personal (non-employer) address.
2. Read `SANITIZATION.md` and confirm nothing confidential appears in any description.
3. Enable Pages: repo **Settings → Pages → Source: Deploy from branch → `main` / root**.

## Local preview

```powershell
python -m http.server 8080
# then open http://localhost:8080
```

## Putting it on your CV

Print the short URL plainly, e.g.

> Portfolio: `hhl1230.github.io`

Keep the CV itself to 3–4 bullet achievements; let the portal carry the detail.
