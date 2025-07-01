if (123) {
  console.log("123 is true");
} else {
  console.log("123 is false");
}

if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is false");
}

// truthy-falsey

// falsey
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// truthy
//
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

function printName(person) {
  if (person === undefined || person === null) {
    console.log("person 값 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);

// 효율적으로 truthy-falsey로
function printName2(person) {
  if (!person) {
    console.log("person값이 없음");
    return;
  }
  console.log(person.name);
}

person = null;
printName2(person);
