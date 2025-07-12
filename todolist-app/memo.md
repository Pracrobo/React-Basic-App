- Self-closing 태그 사용

```jsx
<Editor onCreate={onCreate} />
```

- props를 넘기고 싶다면 반드시 `<Editor onCreate={onCreate} /> `처럼 self-closing 태그로 쓰거나,
  <Editor onCreate={onCreate}>...</Editor> 처럼 열고 닫는 태그 안에 children을 명확히 넣어야 합니다.
- <Editor>onCreate={onCreate}</Editor>처럼 쓰는 건 문법적으로 잘못된 사용입니다.
  - 안쪽의 내용은 **무조건 children**으로 전달
