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

export const temp = [
  {
    bid: 1,
    title: "111",
    content: "내용1",
    createDate: "YYYY-MM-DD hh:mm:ss",
    updateDate: "YYYY-MM-DD hh:mm:ss",
    viewCount: 0,
    like: 0,
    uid: 1,
  },
  {
    bid: 2,
    title: "222",
    content: "내용2",
    createDate: "YYYY-MM-DD hh:mm:ss",
    updateDate: "YYYY-MM-DD hh:mm:ss",
    viewCount: 10,
    like: 3,
    uid: 0,
  },
  {
    bid: 3,
    title: "333",
    content: "내용3",
    createDate: "YYYY-MM-DD hh:mm:ss",
    updateDate: "YYYY-MM-DD hh:mm:ss",
    viewCount: 5,
    like: 0,
    uid: 0,
  },
];
