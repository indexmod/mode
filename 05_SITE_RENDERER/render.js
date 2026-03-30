const fs = require("fs");
const path = require("path");

function mdToHtml(md) {
  return md
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
    .replace(/\n/g, "<br/>");
}

function render(templatePath, { title, content, meta }) {
  const template = fs.readFileSync(templatePath, "utf-8");

  return template
    .replace("{{TITLE}}", title || "Article")
    .replace("{{META}}", meta || "")
    .replace("{{CONTENT}}", mdToHtml(content));
}

module.exports = { render, mdToHtml };
