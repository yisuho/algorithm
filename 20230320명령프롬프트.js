const fs = require("fs");
let [n, ...input] = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

let text = [];
input.map((i) => {
  text.push(i.split(""));
});
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (text[i][j] !== text[i + 1][j]) {
      text[i + 1][j] = "?";
    }
  }
}
console.log(text.slice(-1)[0].join(""));
