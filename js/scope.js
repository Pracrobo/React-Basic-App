/** 범위
 *  변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
 */

// 전체 영역 (전역 스코프)
// 지역 스코프

let a = 1;

function funcA() {
  let b = 10;
  console.log(a);
}

funcA();
console.log(b); // is not undefined

if (true) {
  let c = 1;
} // 블록 스코프
// 함수도 지역 스코프
