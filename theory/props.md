## Props

값을 전달할 수 있는 것을 Props라고 한다.


구조분해할당 방식으로
```jsx
const Button = (children, text, color = "black") => {
    return (<button style={{color : color}}>
    {text}
    </button>
    );
};
```


자식 컴포넌트 전달도 가능 props
```jsx
const Button = (children, text, color = "black") => {
    return (<button style={{color : color}}>
    {text}
    {children}
    </button>
    );
};
```


