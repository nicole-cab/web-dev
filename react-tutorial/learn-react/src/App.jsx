import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

// JSX: Javasript XML, used to write HTML in React
//    it converts HTML tags into react elements and place them in the DOM without any createElement() and/or appendChild() methods
//    JSX is translated into regular JS at runtime
const exampleJSX = <h1>This is JSX!</h1>;

// you don't have to use JSX in React, it just easier with JSX
const exampleWithoutJSX = React.createElement("h1", {}, "This is not JSX");

// you write expressions inside curly braces
// the expression can any JS expression, JSX will execute the expression and return the result
const exp = <h1>What is 2+5? The answer is {2 + 5}</h1>;

// you can insert large block of HTML using parenthesis
const largeBlock = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

// you must wrap HTML code in one top level element, e.g. if you want to write two paragraphs you must put them inside a parent element like a div
// alternetively you can use a "fragment" to wrap multiple lines, to prevent unnecessarily adding extra nodes to the DOM
const twoPar = (
  <div>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </div>
);

const twoPar2 = (
  <>
    <p>First paragraph 2</p>
    <p>Second paragraph 2</p>
  </>
);

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      {exampleJSX}
      {exampleWithoutJSX}
      {exp}
      {largeBlock}
      {twoPar}
      {twoPar2}
    </div>
  );
}

export default App;
