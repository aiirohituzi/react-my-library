// - 게시글
// bid
// title
// content
// createDate
// updateDate
// viewCount
// like
// uid - [user] 다른 table

// - 유저
// uid
// password
// nickname
// name
// email
// signUpDate

// - 코멘트
// cid
// message
// createDate
// updateDate
// uid - [user] 다른 테이블
// bid - [board] 다른 테이블

export const POST = [
  {
    pid: 1,
    title: "111",
    content: "내용1",
    createDate: "YYYY-MM-DD hh:mm:ss",
    updateDate: "YYYY-MM-DD hh:mm:ss",
    viewCount: 0,
    like: 0,
    uid: "user2",
  },
  {
    pid: 2,
    title: "222",
    content: "내용2",
    createDate: "YYYY-MM-DD hh:mm:ss",
    updateDate: "YYYY-MM-DD hh:mm:ss",
    viewCount: 10,
    like: 3,
    uid: "user1",
  },
  {
    pid: 3,
    title: "333",
    content: "내용3",
    createDate: "YYYY-MM-DD hh:mm:ss",
    updateDate: "YYYY-MM-DD hh:mm:ss",
    viewCount: 5,
    like: 0,
    uid: "user1",
  },
];

export const USER = [
  {
    uid: "user1",
    password: "abcd1234",
    nickname: "유저1",
    name: "이름1",
    email: "user1@gmail.com",
    signUpDate: "YYYY-MM-DD hh:mm:ss",
  },
  {
    uid: "user2",
    password: "qwer1234",
    nickname: "유저2",
    name: "이름2",
    email: "user2@gmail.com",
    signUpDate: "YYYY-MM-DD hh:mm:ss",
  },
  {
    uid: "user3",
    password: "zxcv1234",
    nickname: "유저3",
    name: "이름3",
    email: "user3@gmail.com",
    signUpDate: "YYYY-MM-DD hh:mm:ss",
  },
];

export const COMMENT = [
  {
    cid: 0,
    message: "wwwww",
    createDate: "2023-06-12 12:00:00",
    updateDate: "2023-06-12 12:00:00",
    uid: "user1",
    pid: "1",
  },
  {
    cid: 1,
    message: "ㅎㅎ",
    createDate: "2023-06-13 12:00:00",
    updateDate: "2023-06-13 12:00:00",
    uid: "user2",
    pid: "1",
  },
  {
    cid: 2,
    message: "ㅋㅋ",
    createDate: "2023-06-14 12:00:00",
    updateDate: "2023-06-14 12:00:00",
    uid: "user3",
    pid: "1",
  },
  {
    cid: 3,
    message: "ㅈㅅ",
    createDate: "2023-06-15 12:00:00",
    updateDate: "2023-06-15 12:00:00",
    uid: "user1",
    pid: "2",
  },
];

// 상세 게시글 요청 대체 함수
export const getPost = (pid) => {
  let filterdPosts = POST.filter((e) => e.pid === Number(pid));
  return filterdPosts[0];
};

// 작성자 닉네임 요청
export const getWriter = (uid) => {
  let user = USER.filter((e) => e.uid === uid);
  return { uid: user[0].uid, nickname: user[0].nickname };
};

// 특정 게시글의 댓글 목록 요청
export const getComment = (pid) => {
  let comments = [];
  let filterdComments = COMMENT.filter((e) => Number(e.pid) === Number(pid));
  filterdComments.forEach((e) => {
    comments = [...comments, { ...e, computedUser: getWriter(e.uid) }];
  });
  return comments;
};
