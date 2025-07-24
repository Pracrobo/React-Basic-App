/** 비동기작업을 감싸는 객체
 * Promise 효능
 ** 비동기 작업 실행
 ** 비동기 작업 상태 관리
 ** 비동기 작업 결과 저장
 * 비동기 작업 병렬 실행
 * 비동기 작업 다시 실행
 *
 */
// pending 대기 -> fulfilled 성공  ( resolve 해결 ) ? rejected 실패 (reject 거부)
// 영상 로딩          시청 가능 상태    영상 로딩 완료   시청 불가능 상태  영상 로딩 실패
// 비동기 작업을 실행하는 함수
// executor
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("안녕");
//     resolve("Hi");
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("안녕");
//     reject("거절된 이유..");
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);
//

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = null;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});
// promise chainning
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// promise.catch((error) => {
//   console.log(error);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
