import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import { useNavigate } from "react-router-dom";

// TODO:  ul도 컨테이너로 감싸서 하나의 컴포넌트화

const List = (props) => {
  const [data, setData] = useState();
  const [isClicked, setIsClicked] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    if (props?.data) {
      setData(props.data);
    }
    if (data) {
      data.map((obj) => {
        const initIsClicked = [...isClicked];
        initIsClicked[obj.pid] = false;
        setIsClicked(initIsClicked);
      });
    }
  }, [props, data]);

  const updateIsClicked = (id) => {
    setIsClicked((prevState) => {
      const newState = [...prevState];
      newState[id] = !newState[id];
      return newState;
    });
  };

  const onClickHandler = (obj) => {
    // TODO: 최종형태는 id만 받고 넘겨서 쿼리 요청 하도록 뒤의 state는 필요없음
    nav(`/detail/${obj.pid}`, { state: obj });
    // updateIsClicked(id);
  };

  return (
    <>
      {data
        ?.sort((a, b) => b.pid - a.pid)
        .map((obj) => {
          return (
            // TODO: 최종형태는 id만 넘겨서 쿼리 요청 하도록
            <li key={obj.pid} onClick={() => onClickHandler(obj)}>
              {`글번호:${obj.pid} / 글제목:${obj.title} / 작성일:${obj.createDate} / 수정일:${obj.updateDate} / 조회수:${obj.viewCount} / 좋아요:${obj.like}`}
            </li>
          );
        })}
    </>
  );
};

export default List;
