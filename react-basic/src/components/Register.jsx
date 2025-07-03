import {useState, useRef} from "react";


const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
    })    

    const refObj = useRef(0);
    console.log(refObj);

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    };
    
    return (
    <div>
        <div><input name="name" value={input.name} onChange={onChange} placeholder={"이름"}></input></div>
        <div><input name="birth" value={input.birth} onChange={onChange} type="date"></input>{input.birth}</div>
    </div>
    )
}


export default Register;

