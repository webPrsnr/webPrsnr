var md = require("markdown-it")({
  html: true,
  breaks: true,
});
const fs = require("fs");
var { stringify } = require("svgson");
var getSvgTemplate = require("./svgTemplate");

(async () => {
  const date = new Date();
  const template = getSvgTemplate(date);
  const svg = stringify(template);
  fs.writeFile("welcome.svg", svg, function (err) {
    if (err) return console.log(err);
    console.log(`insert svg string > welcome.svg`);
  });
  const text = `<div style="width:100%">\n<a href="mailto:yl29qtw6e@mozmail.com">\n<img src="welcome.svg" style="width:100%" alt="Click to copy email">\n</a>\n</div>
    `;
  const result = md.render(text);
  fs.writeFile("README.md", result, function (err) {
    if (err) return console.log(err);
    console.log(`${result} > README.md`);
  });
})();
