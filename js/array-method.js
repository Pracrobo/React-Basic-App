// 배열 메서드 - 요소 조작
// 1. push : 배열 맨 뒤에 요소 추가
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);
console.log(arr1); // 3: 4 4: 5 5: 6 length를 반환
console.log(newLength); // 7

// 2. pop  : 배열 맨 뒤 요소 제거 , 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
console.log(popedItem); // 3

// pop, push 보다 느림
// 3. shift : 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftItem = arr3.shift();
console.log(shiftItem, arr3); // 1 [2, 3]

// pop, push 보다 느림
// 4. unshift : 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); // 4 [0, 1, 2, 3]

// 5. slice : 배열의 특정 부위 잘라서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let slice2 = arr5.slice(2);
let slice3 = arr5.slice(-1); //뒤에서부터 몇개 잘라라
console.log(sliced); // [ 3, 4, 5 ]
console.log(sliced2); // [ 3, 4, 5 ]
console.log(sliced3); // [ 5 ]
console.log(arr5); // [ 1, 2, 3, 4, 5 ]

// 6. concat  : 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1,2,3,4]
