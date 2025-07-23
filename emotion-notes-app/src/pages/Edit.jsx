import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import {
  DiaryDispatchContext,
  DiaryStateContext,
} from "../contexts/DiaryContext";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import useDiary from "../hooks/useDiary";
import useTitle from "../hooks/useTitle";

const Edit = () => {
  const params = useParams();
  useTitle(`${params.id}번 일기 수정`);
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

  const currentDiaryItem = useDiary(params.id);
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로가기"}></Button>
        }
        rightChild={
          <Button
            onClick={onClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"}
          ></Button>
        }
      ></Header>
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};
export default Edit;
