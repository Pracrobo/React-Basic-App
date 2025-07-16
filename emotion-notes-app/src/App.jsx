import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-emoji";
// "/" : Home
// "/new" : 새 일기 작성 페이지
// "/diary" : 상세 일기 조회
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
