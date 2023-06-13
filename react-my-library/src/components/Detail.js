import React, { useEffect, useState } from "react";

// TODO: 독립 페이지로 분리해서 사용 시 컨텍스트로 setState를 빼서 관리해야 할듯

const Detail = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (props?.data) {
      setData(props.data);
    }
  }, [props, data]);
  return <>{props.isClicked && data?.content}</>;
};

export default Detail;
