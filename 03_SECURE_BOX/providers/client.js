const { callOpenAI } = require("./providers/openai");

async function generateText(topic) {
  return await callOpenAI(`Write an article about: ${topic}`);
}

module.exports = {
  generateText
};
