/* Type Casting
 * 어떤 값의 타입을 다른 타입으로 변경하는 것을 말한다.
 * 묵시적 형 변환(암묵적 형변환) : 자바스크립트 엔진이 형변환을 알아서 벼환
 * 명시적 형 변환 : 직접 함수 등을 이용해서 형변환을 일으킨다.
 *
 */

// 묵시적 형 변환
let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020

// 문자열 -> 숫자     : Number(str)
// 문자열+숫자 => 숫자 : parseInt
let str2 = "10개";
let strToNum2 = parsedInt(str2);
console.log(strToNum2); // 10

let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");
