const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n")
  .map(Number);

const [T, ...arr] = input;

for (let i = 0; i < T; i++) {
  let k = arr.shift();
  let n = arr.shift();

  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  for (let j = 1; j <= n; j++) {
    house[0][j] = j;
  }
  for (let f = 1; f <= k; f++) {
    for (let h = 1; h <= n; h++) {
      house[f][h] = house[f - 1][h] + house[f][h - 1];
    }
  }
  console.log(house[k][n]);
}
