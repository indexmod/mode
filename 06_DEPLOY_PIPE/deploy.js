const { runPipeline } = require("../02_ORCHESTRATOR_CORE/pipeline");
const { buildSite } = require("../05_SITE_RENDERER/build");

const { exec } = require("child_process");
const path = require("path");

async function deploy(topic, options = {}) {
  if (!topic) {
    throw new Error("Topic is required");
  }

  const { open = false } = options;

  console.log("🚀 DEPLOY START:", topic);

  // 1. Генерация + сохранение markdown
  const result = await runPipeline(topic);

  // 2. Сборка HTML сайта
  buildSite();

  const fileName = result.filePath
    .split("/")
    .pop()
    .replace(".md", ".html");

  const fullPath = path.join(__dirname, "../dist", fileName);

  // 👉 открываем только локально
  if (open) {
    openInBrowser(fullPath);
  }

  console.log("✅ DEPLOY DONE:", fullPath);

  return fullPath;
}

// только для локальной разработки
function openInBrowser(filePath) {
  exec(`open "${filePath}"`);
}

module.exports = { deploy };
