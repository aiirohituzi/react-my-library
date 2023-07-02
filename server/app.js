const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const app = express();

if (process.env.NODE_ENV == "local") {
  console.log("Local Server");
  dotenv.config({ path: path.join(__dirname, "./.env.local") });
} else if (process.env.NODE_ENV == "synology") {
  console.log("Synology Server");
  dotenv.config({ path: path.join(__dirname, "./.env.synology") });
} else {
  console.log("Not Set NODE_ENV");
  return;
}
const PORT = process.env.PORT || 8080;

// env 로딩 후 실행해야 함
const maria = require("./database/connect/maria");

// Express 앱 구성
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트 등록
app.get("/api/create", async (req, res) => {
  await maria.connect();
  maria.query(
    `CREATE TABLE users (
      idx INT AUTO_INCREMENT PRIMARY KEY,
      uid VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      nickname VARCHAR(50) NOT NULL,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      sign_up_date DATE NOT NULL
    )`,
    (error, results, fields) => {
      maria.end();
      if (error) throw error;
      res.send(results);
    }
  );
});
app.get("/api/select", async (req, res) => {
  await maria.connect();
  maria.query(`SELECT * FROM users`, (error, results, fields) => {
    maria.end();
    if (error) throw error;
    console.log(results);
    res.send(results);
  });
});
app.post("/api/update", (req, res) => {});
app.post("/api/delete", (req, res) => {});

// 서버 시작 함수
const startServer = () => {
  const server = app.listen(PORT, () => {
    console.log(`Server running... PORT:${PORT}`);
    if (process.send) {
      process.send("ready");
    }
  });

  // SIGINT 이벤트 핸들러 등록
  process.on("SIGINT", () => {
    console.log("Received SIGINT. Closing server gracefully...");
    server.close(() => {
      console.log("Server closed.");
      process.exit(0); // 프로세스 종료
    });
  });
};

startServer(); // 서버 시작
