const { callGroq } = require("../03_SECURE_BOX/providers/groq");

async function generateArticle(topic) {
  const prompt = `
You are a professional writer.

Write a high-quality article in Markdown format.

Topic: "${topic}"

Requirements:
- clear structure (H1, H2)
- practical explanations
- modern tone
- no fluff
- 800–1200 words
- include examples where useful
`;

  const response = await callGroq(prompt);

  if (!response) {
    throw new Error("LLM returned empty response");
  }

  return response;
}

module.exports = { generateArticle };
