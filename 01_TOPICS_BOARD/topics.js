// 01_TOPICS_BOARD/topics.js

async function loadTopics() {
  const res = await fetch('./topics.txt');
  const text = await res.text();

  const topics = text
    .split('\n')
    .map(t => t.trim())
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  return topics;
}
