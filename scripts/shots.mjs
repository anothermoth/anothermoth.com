// Captures real screenshots of the live projects for the work cards (desktop, 1440x900 viewport).
import { chromium } from "playwright-core";
const targets = [
  ["restaurant-site", "https://restaurant-site-poc.pages.dev/menu"],
  ["restaurant-editor", "https://restaurant-site-poc-editor.vercel.app/"],
  ["fine-grind", "https://finegrindfabrication.com/"],
];
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? "/usr/bin/google-chrome", headless: true });
for (const [name, url] of targets) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `src/assets/work/${name}.png` });
  await page.close();
  console.log("saved", name);
}
await browser.close();
