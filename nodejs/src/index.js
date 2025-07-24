// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));
// // console.log(moduleData);

// import { add, sub } from "./math2.js"; // 확장자 넣기 esm
// import mul from "./math2.js"; // 이름 변경도 가능 기본값만

import mul, { add, sub } from "./math2.js"; // 다 넣어도 됨
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
