function solution() {
  let answer = "";
  let queue = [];

  queue.push(1); //루트 노드여서 넣어준다.

  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution());
