import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  return (
    <div>
      <Header
        title={"새일기쓰기"}
        leftChild={<Button text={"< 뒤로가기"}></Button>}
      ></Header>
      <Editor></Editor>
    </div>
  );
};

export default New;
