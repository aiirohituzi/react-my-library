import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// StrictMode 는 개발 단계에서 개발자의 코드를 확인하여 사전에
// 발생할 수 있는 에러를 파악해 예기치 못한 오류를 막기 위해 사용하는데
// 이를 위해 일부 코드가 2번씩 실행된다.
// 이로 인해 useEffect 의존성 배열에 빈배열을 전달해도 두 번 실행되는 것처럼 보임
// 실제 빌드에선 그럴 일이 없다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
