import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../contexts/DiaryContext";

const useDiary = (id) => {
  // 커스텀 훅은 use를 붙이면 됨
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();
  const [currentDiaryItem, setCurrentDiaryItem] = useState(null);

  useEffect(() => {
    const found = data.find((item) => String(item.id) === String(id));
    if (!found) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    } else {
      setCurrentDiaryItem(found);
    }
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;
