/** 비동기적으로 실행되는 함수
 * Web APIs가 실행되는 영역
 * 비동기 함수가 콜백함수 실행
 * setTimeout(() => {
 *
 * });
 */

const { useCallback } = require("react");

function task() {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}

task();

/////////////

// 음식 주문 상황
function orderFood() {
  setTimeout(() => {
    const food = "떡볶이";
    useCallback(food);
  }, 3000);
}

function cooldownFood(food) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 15000);
}
// 콜백 지옥
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
