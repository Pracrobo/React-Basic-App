import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import {useState} from 'react';
import Register from "./components/Register";


function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a:1, 
    b:2,
    c:3,
  }

  const [count, setCount]= useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <Header />
      <Register></Register>
      <div><h1>{light}</h1></div>
      <div><button onClick={() => {setLight(light === "ON"?  "OFF" : "ON")}}>스위치</button></div>
      <Button {...buttonProps}></Button>
      <Button text={"카페"}></Button>
      <Button text={"블로그"}></Button>
      <Button text={"뉴스"}>
        <div> 자식 요소 </div>
      </Button>
      <h1>{count}</h1>
      <button onClick = {() => {
        setCount(count + 1);}}>+</button>


      <Footer />
    </>
  );
}

export default App;
