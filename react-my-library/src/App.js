import "./App.css";
import { List, Detail, CreatePost } from "./pages";
import { POST } from "./dbPrototype";
import { Route, Routes } from "react-router-dom";

// TODO: 라우팅 기능 구현

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<List data={POST} />} />
        <Route exact path="/list" element={<List data={POST} />} />
        <Route exact path="/detail/:pid" element={<Detail />} />
        <Route exact path="/createPost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
