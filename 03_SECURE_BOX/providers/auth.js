require("dotenv").config();

function getKey(name) {
  const key = process.env[name];
  if (!key) throw new Error(`Missing env key: ${name}`);
  return key;
}

module.exports = { getKey };
