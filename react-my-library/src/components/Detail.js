import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../dbPrototype";

const Detail = (props) => {
  const [post, setPost] = useState();
  const params = useParams();

  useEffect(() => {
    setPost(getPost(params.pid));
  }, [params]);

  return post ? (
    <>
      <p>글번호:{post.pid}</p>
      <p>글제목:{post.title}</p>
      <p>글내용:{post.content}</p>
      <p>작성일:{post.createDate}</p>
      <p>수정일:{post.updateDate}</p>
      <p>조회수:{post.viewCount}</p>
      <p>추천:{post.like}</p>
      <p>작성자:</p>
    </>
  ) : (
    <>"데이터x"</>
  );
};

export default Detail;
