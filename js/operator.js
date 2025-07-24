/***
 * 연산자
 * 증감 연산자
 * ++num // 바로 계산된다.
 *
 *
 *
 */

// 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not); // true false false

// 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2); //false true

let comp3 = 2 > 1;
let comp4 = 2 < 1;
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

/***
 * 연산자 2
 */

// null 병합 연산자 : 존재한 값을 추려내는 기능 null, undefined가 아닌 값을 찾아내는 연산자.
let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2;
console.log(var4); // 10

let var5 = var1 ?? var3;
let var6 = var2 ?? var3;
console.log(var6); // 앞의 내용

// typeof 연산자 : 값의 타입을 문자열로 반환하는 기능을 하는 연산자.
let var7 = 1;
var7 = "hello";
let t1 = typeof var7;
console.log(t1); // 타입을 반환하기 때문에 string으로 출력

// 삼항 연산자 : 항3개 사용 연산자
