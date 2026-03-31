// 01_TOPICS_BOARD/topics.js

export async function loadTopics() {
  const res = await fetch('./topics.txt');
  const text = await res.text();

  return text
    .split('\n')
    .map(t => t.trim())
    .filter(Boolean)
    .sort();
}
