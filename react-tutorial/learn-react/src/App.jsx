import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 id="app-heading">REACT TUTORIAL</h1>
      <ul>
        <li>
          <Link to="/jsx">React JSX</Link>
        </li>
        <li>
          <Link to="/components">React Components</Link>
        </li>
        <li>
          <Link to="/props">React Props</Link>
        </li>
        <li>
          <Link to="/events">React Events</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default App;
