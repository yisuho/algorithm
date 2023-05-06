function solution(start, end) {
  let answer = "";
  let checkArray = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  checkArray[start] = 1;
  queue.push(start);
  dis[start] = 0;
  while (queue.length) {
    let x = queue.shift(); // 좌표
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === end) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && checkArray[nx] === 0) {
        checkArray[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
