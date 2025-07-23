import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0]; // 관례상 dom 요소 저장할때 $domName
    $title.innerText = title;
  }, [title]);
};

export default useTitle;
