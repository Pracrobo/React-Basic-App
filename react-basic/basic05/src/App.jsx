import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  createContext,
} from "react";
import TodoItem from "./components/TodoItem";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );

    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);

    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
// Provider : 컴포넌트임
//

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  // reducer 함수가 담당
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);
  // 빈배열은 mouted 될때 한번만 함수를 새롭게 생성하지 않음

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }; // 리렌더링 방지, 객체로 하기 때문에 구조분해할당으로 전달
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext value={memoizedDispatch}>
          <Editor />
          <List></List>
        </TodoDispatchContext>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
