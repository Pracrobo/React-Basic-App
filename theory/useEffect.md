# useEffect

- 리액트 컴포넌트의 사이드 이펙트를 제어하는 React Hook
  > 사이드 이펙트(side effect) : 부수적 효과, 파생되는 효과
- console에 출력되는 것도 side effect
- 이걸 useEffect로 할 수 있다.
- Mount , Update, UnMount 인 생명주기를 제어

> react-basic/basic02 에서 확인 가능

```ts
useEffect(() => {
  console.log(`count: ${count}/ input : ${input}`);
}, [count, input]);
// [] 의존성 배열
// dependency array
// deps

const onClickButton = (value) => {
  setCount(count + value); //호출만 된거, 비동기로 동작함 그래서 밑에 console.log로 count 찍어도 변경되기 이전의 값만 출력된다
};
```

제어하는 부분 자세히

`App.jsx`

```ts
const isMount = useRef(false);

// 1. 마운트 : 탄생
useEffect(() => {
  console.log("Mount");
}, []);
// 빈배열 전달

// 2. 업데이트 : 변화, 리렌더링
useEffect(() => {
  if (!isMount.current) {
    isMount.current = true;
    return;
  } // 처음에 update 출력도 안되고 실제 update 만 되었을때 사용하고 싶다면
  console.log("update");
});

// 3. 언마운트 : 죽음 >> Even 컴포넌트 확인
```

`component/Event`

```typescript
import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 콜백함수를 반환하는 것을 클린업, 정리함수 ([] 종료 unmount사용됨)
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
```
