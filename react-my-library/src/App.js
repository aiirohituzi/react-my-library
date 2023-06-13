import "./App.css";
import { List } from "./components";
import { temp } from "./temp";

function App() {
  return (
    <div className="App">
      <List data={temp}></List>
    </div>
  );
}

export default App;
