// 배열 메서드 - 배열 변형
// 1. filter : 기존 배열에서 조건을 만족하는 요소들만 필터링해서 새로운 배열로 반환
let arr1 = [
  { name: "Kim", hobby: "운동" },
  { name: "Lee", hobby: "운동" },
  { name: "Park", hobby: "영화" },
];

const moviePeople = arr1.filter((item) => item.hobby === "운동");
console.log(moviePeople);
//0 : {name: "Kim", hobby:"운동"}
//1 : {name: "Lee", hobby:"운동"}

// 2. map : 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  // 현재요소, 반복카운트, 원본배열
  console.log(idx, item);
  return item * 2;
});

console.log(mapResult1); //[2,4,6]

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort : 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // ['a', 'b', 'c']
// 숫자값의 배열은 정렬이 안된다.
// 이유는 배열을 사전순으로 정렬 >> sort와 비교기준을 콜백함수로 호출
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; // 양수, b ,a 순으로 배치
  } else if (a < b) {
    return -1; // 음수, a, b순으로 배치
  } else {
    return 0; // 순서 그대로 유지
  }
});

console.log(arr4); // [3, 5, 10] 오름차순 정렬

// 4. toSorted : sort와 똑같지만 원본 배열은 놔두고 새로운 배열을 반환
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5); // ["c", "a", "b"]
console.log(sorted); // ["a, "b", "c"]

// 5. join : 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "Pracrobo"];
const joined = arr6.join();
console.log(joined);
// hi, im, Pracrobo
// , : seperator 구분자
// -, "", " ", / 등등
