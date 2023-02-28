///dev/stdin
const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const arr = input.map(Number).reverse();
const a = arr.pop();
const max = Math.max(...arr);
let result = 1;

for (let i = 1; i < a; i++) {
  if (arr[i] > arr[0]) {
    result++;
  }
  if (arr[i] === max) {
    break;
  }
}
console.log(result);
