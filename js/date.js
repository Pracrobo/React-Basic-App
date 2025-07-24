/** Date 객체 */
// 생성
let date1 = new Date(); // 생성자
console.log(date1); // 현재 시간 출력

let date2 = new Date("1998-01-01 10:10:10"); // . - / 도 가능
console.log(date2);

// 타임 스탬프
// 00 시 00 분 00초 UTC 로부터 ms 가 지났는지 숫자값
let ts1 = date1.getTime();
console.log(ts1);
let date3 = new Date(ts1);

// 년도 월 시 분 초 시간요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 0부터 시작
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 시간 수정
date1.setFullYear(2023);
date1.setMonth(2); //3월
date1.setDate(30);
date1.setHours(10);
date1.setMinutes(10);
date1.setMilliseconds(19);

// 시간을 여러 포맷으로 출력하기
date1.toDateString();
date1.toLocaleDateString(); //
