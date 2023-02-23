const fs = require("fs");
///dev/stdin
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");
const HMS = input[0].split(" ").map(Number);
const f = input[1];
let H = HMS[0];
let M = HMS[1];
let S = HMS[2];

const s = f % 60;
let addS = S + s;
if (addS >= 60) {
  M += 1;
  addS = addS - 60;
}

const m = Math.floor(f / 60);
const Mm = m % 60;

let addM = M + Mm;
if (addM >= 60) {
  H += 1;
  addM = addM - 60;
}
const h = Math.floor(m / 60);
let addH = H + h;
if (addH >= 24) {
  addH = addH % 24;
}

console.log(addH, addM, addS);
