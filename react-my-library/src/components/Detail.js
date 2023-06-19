import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComment, getPost, getWriter } from "../dbPrototype";
import { consoleLog } from "../util";
import { Comment } from "./";

const Detail = (props) => {
  const [post, setPost] = useState();
  const [writer, setWriter] = useState();
  const params = useParams();

  const data = getPost(params.pid);
  const comments = getComment(params.pid);

  useEffect(() => {
    // consoleLog("data", data);
    if (data) setPost(data);
  }, [data]);

  useEffect(() => {
    // consoleLog("post", post);
    if (post) {
      const writer = getWriter(post.uid);
      // consoleLog("writer", writer);
      setWriter(writer);
    }
  }, [post]);

  return post && writer ? (
    <>
      <p>글번호:{post.pid}</p>
      <p>글제목:{post.title}</p>
      <p>글내용:{post.content}</p>
      <p>작성일:{post.createDate}</p>
      <p>수정일:{post.updateDate}</p>
      <p>조회수:{post.viewCount}</p>
      <p>추천:{post.like}</p>
      <p>작성자:{writer.nickname}</p>
      <Comment data={comments} />
    </>
  ) : (
    <p>해당 게시글은 존재하지 않습니다.</p>
  );
};

export default Detail;
