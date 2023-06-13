import "./App.css";
import { List } from "./components";
import { POST } from "./dbPrototype";

function App() {
  return (
    <div className="App">
      <List data={POST}></List>
    </div>
  );
}

export default App;
