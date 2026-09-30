const { chromium } = require(process.env.PWPATH);
const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const svg = fs.readFileSync('src/icon.svg', 'utf8');
  for (const [size, file, pad] of [[192, 'docs/icon-192.png', 0], [512, 'docs/icon-512.png', 0], [512, 'docs/icon-maskable-512.png', 0.1], [180, 'docs/apple-touch-icon.png', 0]]) {
    const p = await b.newPage({ viewport: { width: size, height: size } });
    const inner = Math.round(size * (1 - pad * 2));
    await p.setContent(`<body style="margin:0;background:#1B2233;display:grid;place-items:center;width:${size}px;height:${size}px">${svg.replace('<svg ', `<svg width="${inner}" height="${inner}" `)}</body>`);
    await p.screenshot({ path: file });
  }
  await b.close();
})();
