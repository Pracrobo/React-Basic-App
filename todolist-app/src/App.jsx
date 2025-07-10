import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "typescript 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "카프카 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodo] = useState([mockData]);

  return (
    <div className="App">
      <Header></Header>
      <Editor></Editor>
      <List></List>
    </div>
  );
}

export default App;
