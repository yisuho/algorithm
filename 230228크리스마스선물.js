///dev/stdin
const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const len = input.shift();
let answer = [];
let p = [];
for (let i = 0; i < len; i++) {
  if (input[i] === "0") {
    if (p.length == 0) {
      answer.push(-1);
    } else {
      answer.push(Math.max(...p));
      p.pop();
    }
  } else {
    p = input[i].trim("").split(" ").map(Number);
    p.shift();
    p.sort();
  }
}
console.log(answer.join("\n"));
