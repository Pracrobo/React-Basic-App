for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 만족하면 바로 다음 조건으로 넘어간다.
  }
  console.log(idx);
  if (idx >= 5) {
    break;
  }
}
