# HHL1230.github.io — Portfolio Portal

Bilingual (繁體中文 default / EN) portfolio index for CV use.
Live at **https://hhl1230.github.io/**

## Structure

```
index.html          page shell (i18n placeholders only, no content)
assets/styles.css   styling
assets/app.js       rendering + language switch + lightbox
assets/shots/       screenshots referenced by `shots`
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
| `"confidential"` | Built for an employer; source stays private | No — badge plus a confidentiality note |

A `"confidential"` project must never have a `repo` value. If a project later
becomes public, set `status` to `"public"` and add `repo`.

### Optional fields

- `metrics` — a short `{ en, zh }` impact line rendered above the tagline,
  e.g. `"Cuts a 40-minute manual step to under 1 minute"`. Leave as `null`
  until you have a defensible figure; see `METRICS.md`.
- `demo` — URL of a live page, shown as a second link. `demoLabel`
  (`{ en, zh }`) overrides the default "Product page" wording, e.g. for a
  game that can be played in the browser.
- `shots` — array of `{ src, caption: { en, zh } }`. `src` is **just the
  filename**; `assets/shots/` is prepended automatically. Thumbnails open in
  a lightbox. See `assets/shots/README.md` for image rules.

## Local preview

`python` is not always on PATH, so a small Node server is the safer option:

```powershell
node -e "const http=require('http'),fs=require('fs'),path=require('path');const t={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};http.createServer((q,s)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p==='/')p='/index.html';fs.readFile(path.join(process.cwd(),p),(e,d)=>{if(e){s.writeHead(404);s.end()}else{s.writeHead(200,{'Content-Type':(t[path.extname(p)]||'application/octet-stream')+'; charset=utf-8'});s.end(d)}})}).listen(8080)"
# then open http://localhost:8080
```

## Putting it on your CV

Print the short URL plainly, e.g.

> Portfolio: `hhl1230.github.io`

Keep the CV itself to 3–4 bullet achievements; let the portal carry the detail.
