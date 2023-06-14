import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// TODO:  ul도 컨테이너로 감싸서 하나의 컴포넌트화

const List = (props) => {
  const [data, setData] = useState();
  const nav = useNavigate();

  useEffect(() => {
    if (props?.data) {
      setData(props.data);
    }
  }, [props, data]);

  const onClickHandler = (pid) => {
    nav(`/detail/${pid}`);
  };

  return (
    <>
      {data
        ?.sort((a, b) => b.pid - a.pid)
        .map((obj) => {
          return (
            <li key={obj.pid} onClick={() => onClickHandler(obj.pid)}>
              {`글번호:${obj.pid} / 글제목:${obj.title} / 작성일:${obj.createDate} / 수정일:${obj.updateDate} / 조회수:${obj.viewCount} / 좋아요:${obj.like}`}
            </li>
          );
        })}
    </>
  );
};

export default List;
