// 배열의 구조분해할당
let arr = [1, 2, 3];

let { one, two, three, four = 4 } = arr;
console.log(one, two, three, four);

// 객체의 구조분해할당
let person = {
  name: "robo",
  age: 30,
  hobby: "테니스",
};

let { name, age, hobby, extra } = person;
console.log(name, age, hobby, extra); // robo 30 테니스 undefined
let = { age: myAge, hobby, name, extra = "hello" } = person;
console.log(name, age, hobby, extra);
/////

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};
func(person); // 객체로 넘겨야 한다.
// 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
