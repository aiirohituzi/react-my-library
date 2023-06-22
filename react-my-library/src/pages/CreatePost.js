import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// TODO: 에디터 모듈 사용하는걸로 후에 수정 필요
const CreatePost = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const refTitle = useRef(null);
  const refContent = useRef(null);

  const createPost = () => {
    console.log(title);
    console.log(content);

    if (title.length == 0) {
      refTitle.current.focus();
    } else if (content.length == 0) {
      refContent.current.focus();
    } else {
      nav(`/list`);
    }
    // 글작성 로직
  };

  const cancelCreatePost = () => {
    nav(`/list`);
  };

  return (
    <div>
      <div>
        <p>글제목</p>
        <input
          type="text"
          value={title}
          ref={refTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p>글내용</p>
        <textarea
          value={content}
          ref={refContent}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <button onClick={() => cancelCreatePost()}>취소</button>
        <button onClick={() => createPost()}>글작성</button>
      </div>
    </div>
  );
};

export default CreatePost;
