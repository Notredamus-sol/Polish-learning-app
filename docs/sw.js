/* Offline support for Polski Codziennie.
   The app shell is cached on install, so the app opens with no internet.
   Pages are served from the cache first and refreshed in the background, so
   a new version appears on the next launch. Fonts are cached the first time
   they load. */
const VERSION = "pc-fdd910dd8d";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png"];
const AUDIO = ["./audio/extra.json", "./audio/u0.json", "./audio/u1.json", "./audio/u10.json", "./audio/u11.json", "./audio/u12.json", "./audio/u13.json", "./audio/u14.json", "./audio/u15.json", "./audio/u16.json", "./audio/u17.json", "./audio/u18.json", "./audio/u19.json", "./audio/u2.json", "./audio/u20.json", "./audio/u3.json", "./audio/u4.json", "./audio/u5.json", "./audio/u6.json", "./audio/u7.json", "./audio/u8.json", "./audio/u9.json"].filter(Boolean);  /* recordings, cached so audio works offline */
const FONT_CACHE = "pc-fonts";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL.concat(AUDIO))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== FONT_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(FONT_CACHE).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const res = await fetch(req); if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }
      catch (err) { return new Response("", { status: 504 }); }
    }));
    return;
  }
  if (url.origin !== self.location.origin) return;
  const key = req.mode === "navigate" ? "./index.html" : req;
  e.respondWith(caches.open(VERSION).then(async c => {
    const cached = await c.match(key, { ignoreSearch: true });
    const fresh = fetch(req).then(res => { if (res.ok) c.put(key, res.clone()); return res; }).catch(() => null);
    if (cached) { e.waitUntil(fresh); return cached; }
    const res = await fresh;
    return res || new Response("Offline and not cached yet. Open the app once while online.", { status: 503, headers: { "Content-Type": "text/plain" } });
  }));
});
