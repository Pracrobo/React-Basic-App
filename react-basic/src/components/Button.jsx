const Button= ({text, color, children}) => {
// 이벤트 객체
    const onClickButton = (e) => {
        console.log(text);
    };
    return <button onClick={onClickButton} style={{ color: color}}> {text} </button>;
};

export default Button;