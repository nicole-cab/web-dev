import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import JSX from "./components/JSX.jsx";
import Components from "./components/Components.jsx";
import Props from "./components/Props.jsx";
import Events from "./components/Events.jsx";
import Conditionals from "./components/Conditionals.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// createRoot() takes one argument, an HTML element, the function is to define the HTML element where a React component should be displayed
// the root node is the HTML element where you want to display the result
// the root node does not have to be a div, and it does not have to have id="root"
const root = ReactDOM.createRoot(document.getElementById("root")); // id="root" is just the standard convention
// render() called to define the React component that should be rendered
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
      <Routes>
        <Route path="/jsx" element={<JSX />}></Route>
        <Route path="/components" element={<Components />}></Route>
        <Route path="/props" element={<Props />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/conditionals" element={<Conditionals />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
