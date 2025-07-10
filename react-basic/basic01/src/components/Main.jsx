import Button from './Button';
import './Main.css'
const Main = () => {
  const user = {
    name : "robo",
    isLogin : true,
  }

  if (user.isLogin) {
    return <div className="logout"> 로그인 </div>
  }else {
    return <div className="logout"> 로그아웃</div>
  }

};
export default Main;
