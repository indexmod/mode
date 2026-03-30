const { callGroq } = require("./groq");

/**
 * Главная точка входа в AI систему
 * Никто кроме этого файла НЕ должен вызывать openai.js напрямую
 */
async function generateText(prompt) {
  if (!prompt) {
    throw new Error("Prompt is required");
  }

  try {
const result = await callGroq(prompt);
    return result;
  } catch (err) {
    console.error("AI Error:", err.message);
    throw err;
  }
}

module.exports = {
  generateText
};
