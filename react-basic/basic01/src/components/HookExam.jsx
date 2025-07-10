import useInput from "../hooks/useInput";

//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출가능
//const state = userSteate() //referenceError: userSteate is not defined

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  // if(true) {
  //     const state = useState();
  // }
  // 2. 조건문, 반복문 내부 선언 안됨

  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <input value={input2} onChange={onChange2}></input>
    </div>
  );
};
export default HookExam;
