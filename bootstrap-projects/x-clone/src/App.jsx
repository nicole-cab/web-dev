import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import Content from "./components/layout/Content.jsx";

function App() {
  return (
    <div className="app container-fluid vw-100 vh-100 m-0 p-0">
      <div className="row w-100 h-100">
        <div className="x-navbar h-100 col-2">
          <Navbar />
        </div>
        <div className="content h-100 col-8">
          <Content />
        </div>
        <div className="misc h-100 col-2">
          <p>Misc</p>
        </div>
      </div>
    </div>
  );
}
export default App;
