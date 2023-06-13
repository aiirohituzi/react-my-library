import React, { useState, useEffect } from "react";
import Detail from "./Detail";

// TODO:  ul도 컨테이너로 감싸서 하나의 컴포넌트화

const List = (props) => {
  const [data, setData] = useState();
  const [isClicked, setIsClicked] = useState([]);

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

  const onClickHandler = (id) => {
    updateIsClicked(id);
  };

  return (
    <>
      {data
        ?.sort((a, b) => b.pid - a.pid)
        .map((obj) => {
          return (
            <li key={obj.pid} onClick={() => onClickHandler(obj.pid)}>
              {`글번호:${obj.pid} / 글제목:${obj.title} / 작성일:${obj.createDate} / 수정일:${obj.updateDate} / 조회수:${obj.viewCount} / 좋아요:${obj.like}`}
              <br />
              <Detail data={obj} isClicked={isClicked[obj.pid]} />
            </li>
          );
        })}
    </>
  );
};

export default List;
