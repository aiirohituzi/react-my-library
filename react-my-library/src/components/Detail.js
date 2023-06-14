import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Detail = (props) => {
  const location = useLocation();
  const propsData = location.state;

  return (
    <>
      {propsData
        ? `글번호:${propsData.pid} / 글제목: ${propsData.title} / 글내용: ${propsData.content}`
        : "데이터x"}
    </>
  );
};

export default Detail;
