import React, { useState, useEffect } from "react";
import Detail from "./Detail";

const List = (props) => {
  const [data, setData] = useState();
  // let isClicked = [];
  const [isClicked, setIsClicked] = useState([]);

  useEffect(() => {
    if (props?.data) {
      setData(props.data);
    }
    if (data) {
      data.map((obj) => {
        let temp = [...isClicked];
        temp[obj.bid] = false;
        setIsClicked(temp);
      });
    }
  }, [props, data]);

  function onClickHandler(id) {
    let temp = [...isClicked];
    console.log(temp);
    temp[id] = !temp[id];
    setIsClicked(temp);
  }
  return (
    <>
      {data
        ?.sort((a, b) => b.bid - a.bid)
        .map((obj) => {
          return (
            <li key={obj.bid} onClick={() => onClickHandler(obj.bid)}>
              {`${obj.bid} / ${obj.title} / ${obj.createDate} / ${obj.updateDate} / ${obj.viewCount} / ${obj.like}`}
              <br />
              <Detail data={obj} isClicked={isClicked[obj.bid]} />
            </li>
          );
        })}
    </>
  );
};

export default List;
