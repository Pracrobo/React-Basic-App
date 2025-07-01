/// rest 매개변수ㅡ

let arr1 = [1, 2, 3];
function funcB(one, ...rest) {
  console.log(rest); // [2,3]
}

funcB(...arr1);
// [1, 2, 3]
