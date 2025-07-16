// 배열 순회
let numbers = [1, 2, 3];

// 1. 배열 인덱스
for (let i = 0; i < numbers.length; i++) {
  console.log(arr(i));
}
// 2. for of 반복문
let arr2 = [4, 5, 6, 7, 8];

for (let item of arr2) {
  console.log(item);
}

let person = {
  name: "Pracrobo",
  age: 30,
  hobby: "운동",
};

// 1. Object.keys 사용
// key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);
// 0:
// 1:
// 2:
for (key of keys) {
  const value = person[key];
  console.log(key, value); //name Pracrobo
}

// 2. Object.values 사용
// 객체에서 value 값만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  console.log(value); // Pracrobo 30 운동
}

// 3.for in 객체 반복
for (let key in person) {
  const value = person[key];
  console.log(key); // name, age, hobby
}
