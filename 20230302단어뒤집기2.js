const fs = require("fs");
const input = fs
  .readFileSync("/Users/yeek0620/Desktop/algorithm/algorithm/index.txt")
  .toString()
  .trim("")
  .split("\n");

const tags = input[0].match(/<[a-z ]+>/g);
const words = input[0].split(/<[a-z ]+>/);

if (tags == null) {
  const tagX = input[0].split(" ");
  let rw = [];
  tagX.map((x) => {
    rw.push(x.split("").reverse().join(""));
  });
  console.log(rw.join(" "));
}
