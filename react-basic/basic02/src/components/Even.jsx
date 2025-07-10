import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 콜백함수를 반환하는 것을 클린업, 정리함수 ([] 종료 unmount사용됨)
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
