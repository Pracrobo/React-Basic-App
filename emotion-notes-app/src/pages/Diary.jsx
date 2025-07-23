import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import useTitle from "../hooks/useTitle";
const Diary = () => {
  const params = useParams();
  useTitle(`${params.id}번 일기 내용`);
  const nav = useNavigate();
  const currentDiaryItem = useDiary(params.id); //null, undefined 가 처음에 나올 수 있음
  if (!currentDiaryItem) {
    return <div> 데이터 로딩중 ...</div>;
  }
  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로 가기"}></Button>
        }
        rightChild={
          <Button
            onClick={() => nav(`/edit/${params.id}`)}
            text={"수정하기"}
          ></Button>
        }
      ></Header>
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
