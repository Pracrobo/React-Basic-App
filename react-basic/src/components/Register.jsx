import {useState} from "react";

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    


    const onChangeName = (e) => {
        setName(e.target.value);
    }
    
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    return (
    <div>
        <div><input value={name} onChange={onChangeName} placeholder={"이름"}></input></div>
        <div><input value={birth} onChange={onChangeBirth} type="date"></input>{birth}</div>
    </div>
    )
}


export default Register;

