import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0); // component 간 데이터 전달인 props는 부모에서 자식으로 전달가능
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("Mount");
  }, []);
  // 빈배열 전달

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    } // 처음에 update 출력도 안되고 실제 update 만 되었을때 사용하고 싶다면
    console.log("update");
  });

  // 3. 언마운트 : 죽음 >> Even 컴포넌트 확인

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
        {count % 2 === 0 ? <Even></Even> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
