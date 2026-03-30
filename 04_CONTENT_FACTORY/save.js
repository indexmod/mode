const fs = require("fs");
const path = require("path");

// создаём папку под статьи
const OUTPUT_DIR = path.join(__dirname, "../content");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

async function saveMarkdown(topic, markdown) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const fileName = `${slugify(topic)}.md`;
  const filePath = path.join(OUTPUT_DIR, fileName);

  fs.writeFileSync(filePath, markdown, "utf-8");

  console.log("💾 Saved article:", filePath);

  return filePath;
}

module.exports = { saveMarkdown };
