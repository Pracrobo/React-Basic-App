import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0); // component 간 데이터 전달인 props는 부모에서 자식으로 전달가능
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count: ${count}/ input : ${input}`);
  }, [count, input]);
  // [] 의존성 배열
  // dependency array
  // deps

  const onClickButton = (value) => {
    setCount(count + value); //호출만 된거, 비동기로 동작함 그래서 밑에 console.log로 count 찍어도 변경되기 이전의 값만 출력된다
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </section>
      <section>
        <Viewer count={count}></Viewer>
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
