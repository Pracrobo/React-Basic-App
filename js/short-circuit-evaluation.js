// 단락 평가
//

let varA = false;
let varB = true;

console.log(varA && varB);
// varB는 접근도 안함

console.log(varB || varA);
// varA 에 접근도 안함

//  truthy- falsey 값을 return 으로 넣어서 한다면
function returnFalse() {
  console.log("false 함수");
  return undefined;
}
function returnTrue() {
  console.log("true 함수");
  return 10;
}

console.log(returnFalse() && returnTrue()); //false 함수 undefined
console.log(returnTrue() || returnFalse()); // true 함수 10

// 단락 평가 활용
function printName(person) {
  const name = person && person.name; // || 은 앞의 값 && 은 뒤의 값 출력
  console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "robo" });
