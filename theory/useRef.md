# useRef

- 새로운 Reference 객체를 생성하는 기능

```jsx
const refObject = useRef();
```

컴포넌트 내부에서 쓰고 싶은 값을 저장하고 값이 변경되면 컴포넌트를 리렌더링 하는 useState와 달리
useRef는 값이 변경되더라도 컴포넌트를 리렌터딜 시키지는 않는다.
