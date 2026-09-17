# links

A static page that holds my links, with search.

Four files, no build step, no dependencies:

```
index.html   markup
style.css    styling (light/dark)
app.js       fetch + filter + render
links.json   the links
```

## Editing

Everything lives in `links.json`. A link is `name`, `url`, and an optional `tag`
shown on the right of the row. Groups render in the order they appear.

```json
{ "name": "Scooby", "tag": "rohitjg.com", "icon": "compass", "url": "https://scooby.rohitjg.com" }
```

`icon` names one of the outline glyphs in the `ICONS` map at the top of
`app.js`; an unknown or missing key falls back to `link`. To add a glyph, drop
the inner markup of a 24x24 stroke icon (Lucide, Feather, or hand-rolled) into
that map under a new key — no other change needed.

The SNU entries also carry the portal's app `id`, since the portal renders its
tiles as divs and resolves the destination through its API — the `id` is what
ties a row back to the source. Several of those apps are SSO-gated and will
bounce through login if opened cold.

## Running

Needs to be served over HTTP (`fetch` of `links.json` fails on `file://`):

```sh
python3 -m http.server 8000
```

## Deploying

Vercel: import the repo, framework preset "Other", no build command, output
directory `.`. Same story for Netlify, GitHub Pages, or any static host.

## Keyboard

`/` or `⌘K` focuses search, `Enter` opens the top result, `Esc` clears.

## Pins

Use the pin button on a row to keep a link in the `Pinned` group at the top.
Pins are stored locally in the browser, so they persist between visits on the
same device.
