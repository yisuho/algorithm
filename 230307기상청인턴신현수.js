///dev/stdin
const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const [days, dd] = input[0].split(" ").map(Number);
const temp = input[1].split(" ").map(Number);
let maxTem = 0;
let maxTemArr = [];

for (let i = 0; i <= days - dd; i++) {
  maxTem = temp[i];
  for (let j = 1; j < dd; j++) {
    maxTem += temp[i + j];
  }
  maxTemArr.push(maxTem);
}
console.log(Math.max(...maxTemArr));
