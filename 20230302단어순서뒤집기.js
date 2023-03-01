const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const first = input[0];

const a = input[0].split(" ").reverse().join(" ");

for (let i = 1; i <= first; i++) {
  console.log(`Case #${i}: ${input[i].split(" ").reverse().join(" ")}`);
}
