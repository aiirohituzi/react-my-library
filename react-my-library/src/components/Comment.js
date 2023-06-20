import React from "react";
import { consoleLog } from "../util";

const Comment = (props) => {
  const comments = props.data;
  // consoleLog("comments", comments);

  return comments ? (
    <>
      {comments
        .sort((a, b) => Date.parse(b.createDate) - Date.parse(a.createDate))
        .map((obj) => {
          return (
            <li key={obj.cid}>
              {`댓글번호:${obj.cid} / 작성자:${obj.computedUser.nickname} / 댓글내용:${obj.message} / 작성일:${obj.createDate} / 수정일:${obj.updateDate} / uid:${obj.uid} / pid:${obj.pid}`}
            </li>
          );
        })}
    </>
  ) : (
    <></>
  );
};

export default Comment;
