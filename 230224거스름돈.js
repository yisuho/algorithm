const fs = require("fs");
///dev/stdin
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const m = Number(input[0]);
const arr = [500, 100, 50, 10, 5, 1];

let o = 1000 - m;
let result = 0;
const r = arr.map((i) => {
  if (o >= i && o > 0) {
    result += Math.floor(o / i);
    o = o - i * Math.floor(o / i);
  }
});
console.log(result);
