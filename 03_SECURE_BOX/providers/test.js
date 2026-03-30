const { generateText } = require("./client");

(async () => {
  const res = await generateText("Write a short poem about AI");
  console.log(res);
})();
