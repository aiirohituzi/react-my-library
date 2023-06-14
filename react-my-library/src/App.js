import "./App.css";
import { List, Detail } from "./components";
import { POST } from "./dbPrototype";
import { Route, Routes } from "react-router-dom";

// TODO: 라우팅 기능 구현

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<List data={POST} />} />
        <Route exact path="/Detail/:pid" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
