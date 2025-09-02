# jsx

[참고1](https://ko.react.dev/reference/react)
[참고2](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)

```js
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

Bable, Parcel 컴파일 하면,

```js
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network")
);
```

```js
const element = createElement(type, props, ...children);
```

```js
import { createElement } from "react";

function Greeting({ name }) {
  return createElement("h1", { className: "greeting" }, "Hello");
}
```

- type: The type you have passed.
- props: The props you have passed except for ref and key.
- ref: The ref you have passed. If missing, null.
- key: The key you have passed, coerced to a string. If missing, null.

```js
import { createElement } from "react";

function Greeting({ name }) {
  return createElement(
    "h1",
    { className: "greeting" },
    "Hello ",
    createElement("i", null, name),
    ". Welcome!"
  );
}

export default function App() {
  return createElement(Greeting, { name: "Taylor" });
}
```

jsx 사용하면

```js
function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
}
```
