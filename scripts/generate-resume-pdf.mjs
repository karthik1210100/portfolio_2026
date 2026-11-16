/**
 * Generates the downloadable résumé PDF from the HTML source.
 *
 *   Source: resume/resume.html
 *   Output: public/Karthikeyan-Subramanian-Resume.pdf   (served at site root)
 *
 * Run with:  node scripts/generate-resume-pdf.mjs
 *
 * Requires Playwright's Chromium to be available. `createRequire` resolves
 * `playwright` from node_modules (or anywhere on NODE_PATH), so the script is
 * portable across machines that already have it installed.
 */
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = resolve(root, "resume/resume.html");
const OUTPUT = resolve(root, "public/Karthikeyan-Subramanian-Resume.pdf");

const html = readFileSync(SOURCE, "utf8");

const browser = await chromium.launch({ args: ["--no-sandbox"] });
try {
  const page = await browser.newPage();
  // Render the exact résumé markup; `page.pdf()` emulates print media, so the
  // @media print rules (clean sheet, no toolbar) apply automatically.
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.pdf({
    path: OUTPUT,
    format: "A4",
    printBackground: true,
    margin: { top: "7mm", bottom: "7mm", left: "15mm", right: "15mm" },
  });
  console.log(`✓ Résumé PDF written to ${OUTPUT}`);
} finally {
  await browser.close();
}
