const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const [T, ...arr] = input;
const [N, Q] = T.split(" ");
let result = [];
for (let i = 1; i <= N; i++) {
  let n = input[i];
  for (let j = 0; j < n; j++) {
    result.push(i);
  }
  arr.shift();
}
let answer = arr.map(Number);
answer.map((i) => {
  console.log(result[i]);
});
