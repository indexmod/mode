const { generateArticle } = require("./generate");
const { saveMarkdown } = require("../04_CONTENT_FACTORY/save");

async function runPipeline(topic) {
  if (!topic) throw new Error("No topic provided");

  console.log("🚀 Pipeline started for:", topic);

  // 1. Генерация статьи
  const markdown = await generateArticle(topic);

  // 2. Сохранение
  const filePath = await saveMarkdown(topic, markdown);

  console.log("✅ Pipeline finished:", filePath);

  // 3. Возврат результата UI
  return {
    topic,
    filePath,
    markdown
  };
}

module.exports = { runPipeline };
