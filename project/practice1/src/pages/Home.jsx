import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let nav = useNavigate();
  let pageNum = 1;
  return (
    <div>
      Home 이에요
      <div>
        <Link to={{ pathname: "/login", search: `${pageNum}` }}>
          로그인 하러 가기1-1
        </Link>
        {/* Link to = {{
                pathname: "/some/path",
                search: "?query=string",
                hash: "#hash", }}
            result :http://localhost:port/login?1   
                */}
        <button onClick={() => nav("/login/2")}>로그인 하러 가기2-1</button>
      </div>
      <div>
        <Link to={{ pathname: "/login" }}>로그인 하러 가기1-2</Link>
        <button onClick={() => nav("/login")}>로그인 하러 가기2-2</button>
      </div>
    </div>
  );
};

export default Home;
