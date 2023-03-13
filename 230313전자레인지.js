const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n")
  .map(Number);

let N = input.shift();
const A = 300;
const B = 60;
const C = 10;

let result = [];

resultA = Math.floor(N / A);
result.push(resultA);
N = N - A * resultA;

resultB = Math.floor(N / B);
result.push(resultB);
N = N - B * resultB;

resultC = Math.floor(N / C);
result.push(resultC);
N = N - C * resultC;

if (N !== 0) {
  console.log(-1);
} else {
  console.log(result.join(" "));
}
