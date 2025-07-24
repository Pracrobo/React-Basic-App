function main(value) {
  console.log(value);
}

function sub() {
  //callback 함수
  console.log("sub");
}

main(sub); // 함수 자체도 값으로 취급될 수 있다.

main(() => {
  console.log("sub");
});

// 콜백 함수 활용 : 구조익히기
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

//////////////////////////////////////
function main(value) {
  value();
}

function sub() {
  console.log("sub");
}

main(sub);
