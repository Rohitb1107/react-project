// import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <div className="container">
        <Counter />
      </div>
    </div>
  );
}

export default App;
