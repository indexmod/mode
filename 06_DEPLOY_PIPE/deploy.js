const { runPipeline } = require("../02_ORCHESTRATOR_CORE/pipeline");
const { buildSite } = require("../05_SITE_RENDERER/build");

const { exec } = require("child_process");
const path = require("path");

async function deploy(topic) {
  if (!topic) {
    throw new Error("Topic is required");
  }

  console.log("🚀 DEPLOY START:", topic);

  // 1. Генерация + сохранение markdown
  const result = await runPipeline(topic);

  // 2. Сборка HTML сайта
  buildSite();

  // 3. Открытие в браузере
  const fileName = result.filePath
    .split("/")
    .pop()
    .replace(".md", ".html");

  const fullPath = path.join(__dirname, "../dist", fileName);

  openInBrowser(fullPath);

  console.log("✅ DEPLOY DONE");

  return fullPath;
}

// открытие файла (macOS)
function openInBrowser(filePath) {
  exec(`open "${filePath}"`);
}

module.exports = { deploy };
