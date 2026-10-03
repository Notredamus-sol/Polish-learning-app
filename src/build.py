"""Builds both versions of the app from src/polski.html (the single source):
   - dist/artifact.html -> published to claude.ai (claude.ai adds the page skeleton)
   - docs/              -> the installable offline app, served by GitHub Pages
   Run from the repository root:  python3 src/build.py
"""
import sys, hashlib, json, os, re
APP_URL = "https://notredamus-sol.github.io/Polish-learning-app/"
app_url = sys.argv[1] if len(sys.argv) > 1 else APP_URL
src = open("src/polski.html", encoding="utf-8").read()
# /*@include content/x.js*/ pulls a content file into the page (both versions are single files)
src = re.sub(r"/\*@include ([\w./-]+)\*/", lambda m: open(os.path.join("src", m.group(1)), encoding="utf-8").read().strip(), src)
src = src.replace("__APP_URL__", app_url)
os.makedirs("dist", exist_ok=True); os.makedirs("docs", exist_ok=True)
open("dist/artifact.html", "w", encoding="utf-8").write(src)

version = hashlib.sha1(src.encode()).hexdigest()[:10]
head = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#1B2233">
<meta name="description" content="Daily Polish course, A1 to A2. Works offline.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px/1.4 system-ui,sans-serif;background:#EDF0F4}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
"""
tail = """
<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
}
</script>
</body>
</html>
"""
open("docs/index.html", "w", encoding="utf-8").write(head + src + tail)
open("docs/manifest.webmanifest", "w").write(json.dumps({
  "name": "Polski Codziennie", "short_name": "Polski", "description": "Daily Polish course, A1 to A2. Works offline.",
  "id": "./", "start_url": "./", "scope": "./", "display": "standalone", "orientation": "any",
  "background_color": "#EDF0F4", "theme_color": "#1B2233", "lang": "en", "categories": ["education"],
  "icons": [
    {"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"},
    {"src": "icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]
}, indent=2))
sw = open("src/sw.template.js").read().replace("__VERSION__", version)
open("docs/sw.js", "w").write(sw)
open("docs/.nojekyll", "w").write("")
print("built", version, "app url:", app_url)
