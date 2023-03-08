const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const N = input.map(Number);
const sum = N.reduce((acc, cur) => {
  return acc + cur;
}, 0);

for (let i = 0; i < N.length - 1; i++) {
  for (let j = 1; j < N.length; j++) {
    if (N[i] + N[j] === sum - 100 && N[i] !== N[j]) {
      console.log(N.filter((n) => n !== N[i] && n !== N[j]).join("\n"));
    }
  }
}
