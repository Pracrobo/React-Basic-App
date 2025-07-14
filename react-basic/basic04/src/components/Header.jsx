import "./Header.css";
import { memo } from "react";
const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// const memoizedHeader = memo(Header); // Props가 되지 않으면 리렌터링 되지 않음
//export default memoizedHeader;
export default memo(Header);
