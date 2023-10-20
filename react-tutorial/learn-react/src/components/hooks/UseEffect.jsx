import { useState, useEffect } from "react";

// the useEffect hook allows you to perform side effects in your components
// e.g. of side effects: fetching data, directly updating the DOM, and timers
// useEffect(<function>, <dependency>), it accepts 2 arguments, the second one is optional, second parameter accepts an array

function Timer() {
  const [count, setCount] = useState(0);

  // renders new count after every second instead of only once because useEffect runs on every render, so when the conut changes, a render happens, which then triggers another effect
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  // to control when side effects run we should include the second parameter which accepts an array

  // no dependency passed:
  //   useEffect(() => {
  //     // Runs on every render
  //   });

  // an empty array:
  //   useEffect(() => {
  //     // Runs only on the first render
  //   }, []);

  // Props or state values:
  //    useEffect(() => {
  //     // Runs in the first render
  //     // And any time any dependency value changes
  //   }, [prop, state]);

  return (
    <>
      <h3>Timer example</h3>
      <p>I've rendered {count} times!</p>
    </>
  );
}

function TimerFix() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // add empty brackets here

  return (
    <>
      <h3>TimerFix example</h3>
      <p>I've rendered {count} times!</p>
    </>
  );
}

// example of useEffect hook that is dependent on a variable "count"
// if the count variable updates, the effect will run again
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // add the count variable here
  // you can have multiple dependencies, just include them in the array

  // when you press the button, you increment "count", and since "count" has changed state, then useEffect is triggered causing "calculation" to be updated
  return (
    <>
      <h3>Counter example</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

// effect cleanup: some effects require cleanup to reduce memory leaks
// timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed: do this by including a return function at the end of the useEffect hook

function CounterCleanup() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    // to clear the timer we had to name it
    return () => clearTimeout(timer); // return cleanup function
  }, []); // empty array to run once

  return (
    <>
      <h3>Counter Cleanup</h3>
      <p>I've rendered {count} times!</p>
    </>
  );
}

function UseEffect() {
  return (
    <>
      <h1 className="heading">React Hooks: useEffect</h1>
      <Timer />
      <TimerFix />
      <Counter />
      <CounterCleanup />
    </>
  );
}
export default UseEffect;
