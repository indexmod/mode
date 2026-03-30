const { getKey } = require("./auth");

async function callGroq(prompt) {
  const apiKey = getKey("GROQ_API_KEY");

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Groq API error: ${errorText}`);
  }

  const data = await res.json();

  return data.choices?.[0]?.message?.content;
}

module.exports = { callGroq };
