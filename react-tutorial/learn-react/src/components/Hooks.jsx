import { useState } from "react";
// a hook allows function components to have access to state and other react features, because of this, class components are generally no longer needed
// what is a hook? hooks allow us to "hook" into react features such as state and lifecycle methods

// an example of a Hook, more details in the more specific components about hooks
// here we use useState, used to keep track of application state
// state generally refers to application data or properties that need to be tracked
function Hooks() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1 className="heading">React Hooks</h1>
      <p>This is using a Hook: useState</p>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
      <h1>My favourite color is {color}!</h1>
    </>
  );
}

// there are 3 rules for hooks:
//    > hooks can only be called inside react function components
//    > hooks can only be called at the top level of a component
//    > hooks cannot be conditional

// hooks don't work in react class components

export default Hooks;
