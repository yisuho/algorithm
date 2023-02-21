const fs = require("fs");

const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const person = input[0].split(" ").map(Number);
const K = person[1];
const point = input[1].split(" ").map(Number);

const sort = point.sort((a, b) => b - a);

console.log(sort[K - 1]);
