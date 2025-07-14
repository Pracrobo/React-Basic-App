# React.memo

-컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환

```js
const MemoizedComponent = memo(Component);
```

MemoizedComponent = 반환값: 최적화된 컴포넌트 > Props 기준으로 메모이제이션됨
memo(Component) = 인수 : 컴포넌트

Parent(부모) -> Memoized Component (memo로 최적화 된다.)

- 리렌더링X : Props는 변하지 않는다.
