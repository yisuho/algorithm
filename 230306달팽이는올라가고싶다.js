const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split(" ");

const N = input.map(Number);
const A = N[0];
const B = N[1];
const V = N[2];

console.log(Math.ceil((V - B) / (A - B)));
