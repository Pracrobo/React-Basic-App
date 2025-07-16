// 배열 메서드2 - 순회와 탐색
// 1. foreach : 배열의 모든 요소를 순회하면서 각각의 요소의 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
  // 0 2
  // 1 4
  // 2 6
});
// 콜백 함수 : 매개변수로 현재요소의 값(item), 현재 반복 카운트(idx), 전체 배열의 값(arr)
//                      1  0
//                      2  1
//                      3  2
let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes : 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude); //false

// 3. indexOf : 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// * 배열의 객체타입의 값이 저장된 배열에서는 정확한 위치를 반환하지 못함
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); // 1(index 값 반환)

let arr4 = [2, 2, 2];
let index2 = arr4.indexOf(2);
console.log(index2); // 0(같은 값이면 첫번째 발견한 index 값 반환)

let arr5 = [2, 2, 2];
let index3 = arr5.indexOf(20);
console.log(index3); // -1(없다는 의미로 -1 qksghks)

let objArr = [{ name: "Pracrobo" }, { name: "Hong Gildong" }];
console.log(objArr.indexOf({ name: "Pracrobo" })); // -1 못찾음
// 얕은 비교로 비교 ===
// 프로퍼티를 기준으로 비교되지 않는다.
// 객체값 찾아내려면 findIndex사용
console.log(objArr.findIndex((item) => item.name === "Pracrobo"));

// 4. findIndex : 모든 요소를 순회하면서, 콜백 함수를 만족하는
// 그런 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr6 = [1, 2, 3];
const findIndexed = arr6.findIndex(() => {
  // 콜백함수를 만족하는(true를 반환하는) 위치를 반환
  if (item === 2) return true;
});
console.log(findIndexed); // 1

const findIndexed2 = arr6.findIndex(() => {
  if (item % 2 !== 0) return true;
});
console.log(findIndexed2); // 0
// 위에랑 같은 함수(화살표 함수에서 return문, 조건if 제거)
const findIndexed3 = arr6.findIndex((item) => item % 2 !== 0);
console.log(findIndexed); // 0

const findIndexed4 = arr6.findIndex((item) => item === 99);
console.log(findIndexed4); //-1 만족하지 않을때

// 5. find : 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아서 반환
let arr8 = [{ name: "Pracrobo" }, { name: "Hong" }];
const finded = arr8.find((item) => item.name === "Pracrobo");
console.log(finded); // {name : "Pracrobo"}
