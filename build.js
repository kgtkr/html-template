const fs = require("fs");
const path = require("path");

const template = fs.readFileSync("template.html", { encoding: "utf8" });
for (let file of fs.readdirSync("main")) {
  const html = fs.readFileSync("main/" + file, { encoding: "utf8" });
  const title = html.split("\n")[0];
  const main = html.replace(/^.*\n/, "");
  const dist = template.replace("{{title}}", title).replace("{{main}}", main);
  fs.writeFileSync("dist/" + file, dist, { encoding: "utf8" });
}