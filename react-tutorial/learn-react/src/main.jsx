import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import JSX from "./components/JSX.jsx";
import Components from "./components/Components.jsx";
import Props from "./components/Props.jsx";
import Events from "./components/Events.jsx";
import Conditionals from "./components/Conditionals.jsx";
import Lists from "./components/Lists.jsx";
import Forms from "./components/Forms.jsx";
import Page404 from "./components/Page404.jsx";
import Memo from "./components/Memo.jsx";
import CSS from "./components/CSS.jsx";
import Hooks from "./components/Hooks.jsx";
import UseState from "./components/hooks/UseState.jsx";
import UseEffect from "./components/hooks/UseEffect.jsx";
import UseContext from "./components/hooks/UseContext.jsx";
import UseRef from "./components/hooks/UseRef.jsx";
import UseReducer from "./components/hooks/UseReducer.jsx";
import UseCallback from "./components/hooks/UseCallback.jsx";
import UseMemo from "./components/hooks/UseMemo.jsx";

import "./index.css";
// React Router is used in react for page routing
// (Route attributes): "element" tells you what component to render, "index" specifies this route as the default route for the parent route, e.g. "/"
// <Route> tags can be nested, e.g. parent Route has path="/" and child Route has path="contact", then the path="/contact" is used to use the <Contact> component
// setting the path="*" will act as a catch-all for any undefined URLs, great for 404 error page
// The <Link> and <Outlet> tags are used to link to the routes to the components using links (see App.jsx)
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// createRoot() takes one argument, an HTML element, the function is to define the HTML element where a React component should be displayed
// the root node is the HTML element where you want to display the result
// the root node does not have to be a div, and it does not have to have id="root"
const root = ReactDOM.createRoot(
  document.getElementById("root")
); // id="root" is just the standard convention
// render() called to define the React component that should be rendered
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="jsx" element={<JSX />}></Route>
        <Route
          path="components"
          element={<Components />}
        ></Route>
        <Route path="props" element={<Props />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route
          path="conditionals"
          element={<Conditionals />}
        ></Route>
        <Route path="lists" element={<Lists />}></Route>
        <Route path="forms" element={<Forms />}></Route>
        <Route path="memo" element={<Memo />}></Route>
        <Route path="css" element={<CSS />}></Route>
        <Route path="hooks" element={<Hooks />}></Route>
        <Route
          path="useState"
          element={<UseState />}
        ></Route>
        <Route
          path="useEffect"
          element={<UseEffect />}
        ></Route>
        <Route
          path="useContext"
          element={<UseContext />}
        ></Route>
        <Route path="useRef" element={<UseRef />}></Route>
        <Route
          path="useReducer"
          element={<UseReducer />}
        ></Route>
        <Route
          path="useCallback"
          element={<UseCallback />}
        ></Route>
        <Route path="useMemo" element={<UseMemo />}></Route>

        <Route path="*" element={<Page404 />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
