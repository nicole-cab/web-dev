import { useState, useRef, useEffect } from "react";
// the useRef hook allows you to persist values between renders
// it can be used to store a mutable value that does not cause re-render when updated
// it can be used to access a DOM element directly

// using useState, to update a value causes the app to re-render
function UseStateExample() {
  const [count, setCount] = useState(0);
  console.log(`useState: I've re-rendered ${count} times!`);
  return (
    <>
      <h2>useState Example: re-rendering</h2>
      <p>{`Rendering Count: ${count}`}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </>
  );
}

// to be able to update a value without re-rendering, use useRef
// pressing the button will cause count.current to update value without re-rendering which is why the render count remains 0, but in the console we see how count is updated
function UseRefExample() {
  const count = useRef(0); // returns one item, an object with the property "current", this property can be used to access the value of the ref

  const handle = () => {
    count.current++;
    console.log(`const.current: ${count.current}`);
  };

  console.log(`useRef: I've re-rendered ${count.current} times!`);

  return (
    <>
      <h2>useRef Example: update count without re-rendering</h2>
      <p>Render Count: {count.current}</p>
      <button onClick={handle}>+</button>
    </>
  );
}

// --------------------------------------------------

// in general, we want to let React handle all DOM manipulation, but there are some instances where useRef can be used without causing issues
// in react, we can add a "ref" attribute to an element to access it directly in the DOM
function AccessDOMElement() {
  const inputElement = useRef(); // create ref

  const focusInput = () => {
    inputElement.current.focus();
  };

  // <input> has the "ref" attribute pointing to the ref inputElement
  return (
    <>
      <h2>Accessing DOM Elements Example</h2>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// --------------------------------------------------

// the useRef hook can also be used to keep track of previous state values, this is because we are able to persist useRef values between renders
// we use a combination of useState, useEffect and useRef to keep track of the previous state
function TrackStateChanges() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  // we update the useRef current value each time the inputValue is updated and the app is re-rendered by entering text into the input field
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <>
      <h1>Tracking State Changes example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current value: {inputValue}</p>
      <p>Previous Value: {previousInputValue.current}</p>
    </>
  );
}

function UseRef() {
  return (
    <>
      <h1 className="heading">React Hooks: useRef</h1>
      <UseStateExample />
      <UseRefExample />
      <AccessDOMElement />
      <TrackStateChanges />
    </>
  );
}

export default UseRef;
