import {useState, useRef} from "react";


const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
    })    

    const countRef = useRef(0); // ref Object
    const inputRef = useRef()
    // console.log("Reference 초기화"); // {current: 0}

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current); 
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    };
    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM  요소 포커스
            inputRef.current.focus();
        }
    };

    return (
    <div>
        {/* <button onClick={() => {
            refObj.current++;
            console.log(refObj.current);
        }}>
            ref + 1
        </button> */}
        <div><input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"}></input></div>
        <div><input name="birth" value={input.birth} onChange={onChange} type="date"></input>{input.birth}</div>
        <button onClick={onSubmit}>제출</button>
    </div>
    )
}


export default Register;

