import { useState } from "react";
// customHooks: src/hooks 파일 안에 넣는게 일반적인 방법
function useInput() {
    const [input, setInput] = useState(""); // react component 내부에서만 호출 가능하기 때문에 에러, use 써주면 해결

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange]
}


export default useInput;