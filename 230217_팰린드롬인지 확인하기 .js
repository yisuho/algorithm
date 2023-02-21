const fs = require("fs");

const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split(" ");

const string = input.toString().split("");
const reverse_input = input.map((i) => i.split("").reverse().join(""));
const reverse = reverse_input.toString().split("");
let result;
for (let i = 0; i < string.length; i++) {
  if (string[i] !== reverse[i]) {
    result = 0;
    break;
  }
  result = 1;
}
console.log(result);

// const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString().trim("")
//   .split(" ");

// const string = input.toString().split("");
// const n = Math.round(string.length / 2);
// const reverse_input = input.map((el) => el.split("").reverse().join(""));
// const reverse = reverse_input.toString().split("");

// let result;

// for (let i = 0; i <= n; i++) {
//   if (string[i] !== reverse[i]) {
//     result = 0;
//     break;
//   }
//   result = 1;

// }

// console.log(result);
