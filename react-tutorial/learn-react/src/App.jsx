import JSX from "./components/JSX";
import Components from "./components/Components";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="heading">React JSX</h1>
      <JSX />
      <hr />
      <h1 className="heading">React Components</h1>
      <Components />
    </div>
  );
}

export default App;
