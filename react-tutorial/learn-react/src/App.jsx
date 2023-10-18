import "./App.css";

import { Link, Outlet } from "react-router-dom";
// Link is used to link to components along with Routes (see main.jsx), it sets the URL and keeps ttrack of browsing history
// Outlet renders the current route selected
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
        <li>
          <Link to="/conditionals">React Conditionals</Link>
        </li>
        <li>
          <Link to="/lists">React Lists</Link>
        </li>
        <li>
          <Link to="/forms">React Forms</Link>
        </li>
        <li>
          <Link to="/memo">React Memo</Link>
        </li>
        <li>
          <Link to="/css">React CSS Styling</Link>
        </li>
        <li>
          <Link to="/hooks">React Hooks</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
