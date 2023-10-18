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
const twoPar = (
  <div>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </div>
);
// alternatively you can use a "fragment" to wrap multiple lines, to prevent unnecessarily adding extra nodes to the DOM
const twoPar2 = (
  <>
    <p>First paragraph 2</p>
    <p>Second paragraph 2</p>
  </>
);

// close tags with no end tags like this
const myInput = <input type="text" />;

// we use "className" instead of "class" when using element attributes as "class" is a reserved keyword in js
const myHeading1 = <h1 className="my-class">Hello World</h1>;

// react supports if statements, but not inside JSX
// you have two options: write if statements outside the JSX code
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
const myText = <h1>{text}</h1>;
// or use a ternary expression instead
const myText2 = <h1>{x < 10 ? "Hello2" : "Goodbye2"}</h1>;

function JSX() {
  return (
    <>
      <h1 className="heading">React JSX</h1>
      <h1>Hello World!</h1>
      {exampleJSX}
      {exampleWithoutJSX}
      {exp}
      {largeBlock}
      {twoPar}
      {twoPar2}
      {myInput}
      {myText}
      {myText2}
    </>
  );
}

export default JSX;
