const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const [f, s] = input;
const first = f.split("").map(Number);
const second = s.split("").map(Number);
const phone = Array.from(Array(first.length + second.length), () =>
  Array(first.length + second.length).fill(0)
);

for (let i = 0; i < first.length; i++) {
  phone[0][i * 2] = first[i];
  phone[0][i * 2 + 1] = second[i];
}

for (let i = 1; i < phone.length - 1; i++) {
  for (let j = i; j < phone.length; j++) {
    phone[i][j] = phone[i - 1][j - 1] + phone[i - 1][j];
    if (phone[i][j] >= 10) {
      phone[i][j] = phone[i][j] - 10;
    }
  }
}
const n = phone.length - 2;
const k = phone.length - 1;
console.log(phone[n].splice(n, k).join(""));
