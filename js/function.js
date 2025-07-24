function greeting() {
  console.log("안녕하세여!");
}
console.log("호출 전");
greeting();
console.log("호출 후");
// 인수와 매개변수 매칭
function getArea(width, height) {
  let area = width * height;
  return area;
}
getArea(100, 200);

//js는 함수 선언을 아무데서나 해도 됨: 호이스팅 : 끌어올리다

// 함수 선언 : 익명 함수, 함수 표현식 : 호이스팅 되지 않음
let var1 = function () {
  console.log("함수 선언");
};
var1(); // 제대로 작동
// func1(); // 안됨 : 선언이 되지 않았기 때문(선언식이 아님), 호출 불가

// 화살표 함수
let var2 = () => {
  return 1;
};

let var3 = (value) => value + 1;
var3(10);
