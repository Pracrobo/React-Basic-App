let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

let person = {
  name: "robo",
  age: 30,
  hobby: "운동",
  extra: {},
  10: 20,
  "like cat": true,
}; //객체 프로퍼티,객체 속성
// 프로퍼티 key : value
// 점 표기법 괄호표기법
let name = person.name;

console.log(name);
//존재하지 않는 프로퍼티 값 : undefined

let age = person["age"];
// "" 없으면 객체로 해석
// 존재하지 않는 값 : undefined

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 새로운 프로퍼티 추가 방법
person.job = "BE Developer";
person["mbti"] = "intj";

// 프로퍼티 수정
person.job = "educator";

// 프로퍼티 삭제
delete person.job;

// 프로퍼티 존재유무 in 연산자
let result1 = "name" in person;
console.log(result1); //true, false

// 상수객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.name = "까망이";
console.log(animal["name"]);
delete animal.color;

//메서드 : 값이 함수인 프로퍼티

const person = {
  name: " robo",
  sayHi() {
    console.log("안녕");
  }, //메서드 선언
};
person.sayHi();
person["sayHi"]();
