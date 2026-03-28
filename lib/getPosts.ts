import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "pages");

function extractTitle(content: string) {
  const lines = content.split("\n");
  const h1 = lines.find((l) => l.startsWith("# "));
  if (h1) return h1.replace("# ", "");
  return lines[0].slice(0, 60);
}

function stripMarkdown(md: string) {
  return md
    .replace(/[#_*>\-\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const content = fs.readFileSync(fullPath, "utf8");
    const stats = fs.statSync(fullPath);

    return {
      slug,
      title: extractTitle(content),
      description: stripMarkdown(content).slice(0, 160),
      date: stats.mtime.toISOString(),
      content,
    };
  });
}
