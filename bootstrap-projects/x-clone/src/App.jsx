import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./components/content/Home.jsx";

function App() {
  return (
    <div className="app container-fluid vw-100 vh-100 m-0 p-0">
      <div className="row w-100 h-100">
        <div className="x-navbar h-100 col-3">
          <Navbar />
        </div>
        <div className="content h-100 col-5">
          <Home />
        </div>
        <div className="misc h-100 col-4">
          <p>Misc</p>
        </div>
      </div>
    </div>
  );
}
export default App;
