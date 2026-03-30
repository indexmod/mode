const fs = require("fs");
const path = require("path");
const { render } = require("./render");

const CONTENT_DIR = path.join(__dirname, "../content");
const OUTPUT_DIR = path.join(__dirname, "../dist");
const TEMPLATE = path.join(__dirname, "./template.html");

function buildSite() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(CONTENT_DIR);

  files.forEach(file => {
    if (!file.endsWith(".md")) return;

    const filePath = path.join(CONTENT_DIR, file);
    const md = fs.readFileSync(filePath, "utf-8");

    const title = file.replace(".md", "");

    const html = render(TEMPLATE, {
      title,
      content: md,
      meta: `Generated article: ${title}`
    });

    const outPath = path.join(OUTPUT_DIR, file.replace(".md", ".html"));

    fs.writeFileSync(outPath, html, "utf-8");

    console.log("📦 Built:", outPath);
  });

  console.log("✅ Site build complete");
}

module.exports = { buildSite };
