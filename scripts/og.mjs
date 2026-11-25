// Renders public/og.png (1200x630) from inline HTML.
import { chromium } from "playwright-core";
import { readFileSync } from "node:fs";
const mark = readFileSync(new URL("../public/favicon.svg", import.meta.url), "utf8");
const html = `<!doctype html><html><head><style>
body{margin:0;width:1200px;height:630px;background:#f7f5f0;font-family:Georgia,serif;color:#17161b;display:flex;flex-direction:column;justify-content:center;padding:0 90px 110px;box-sizing:border-box;position:relative;overflow:hidden}
.m{width:88px;height:88px;margin-bottom:36px}
h1{font-weight:400;font-size:96px;line-height:1;margin:0 0 22px;letter-spacing:-1px}
p{font-family:Inter,system-ui,sans-serif;font-size:30px;color:#5f5b66;margin:0;max-width:900px;line-height:1.35}
svg.w{position:absolute;left:0;right:0;bottom:0;width:1200px;height:150px;bottom:-10px;color:#4b3bc4;opacity:.45}
</style></head><body><div class="m">${mark}</div><h1>Anothermoth</h1><p>Independent software studio: web apps, fast small-business sites, data systems and practical AI.</p>
<svg class="w" viewBox="0 0 1200 200" preserveAspectRatio="none">${[0.2,1.4,2.6].map((ph,i)=>{let pts=[];for(let x=0;x<=1200;x+=6){const t=x/1200;const env=Math.exp(-(1.6+i*.6)*Math.abs(t-.5)*2);pts.push(x+','+(100+Math.sin(t*Math.PI*2*(7+i*4)+ph)*(80-i*20)*env*Math.sin(t*Math.PI*3+ph*.5)).toFixed(1))}return `<polyline points="${pts.join(' ')}" fill="none" stroke="currentColor" stroke-opacity="${[.9,.45,.3][i]}" stroke-width="2"/>`}).join('')}</svg></body></html>`;
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "/usr/bin/google-chrome" });
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(html);
await p.screenshot({ path: "public/og.png" });
await b.close();
console.log("public/og.png");
