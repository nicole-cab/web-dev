import { useState, createContext } from "react";
// React Context is a way to manage state globally
// it can be used with the useState Hook to share between deeply nested components more easily than with useState alone

// State should be held by the highest parent component in the stack tht requires access to the state
// e.g. if the most nested component needs to access state (which is with the root parent), the state/props must be passed through each component, this is called "prop drilling"
// eventhough component 2 didn't need the state, they had to pass along so that it could reach Component 3
function PropDrilling() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>Component 1</h1>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}
function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}
function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

// --------------------------------------------------

// a solution better than "prop drilling" is to create a context
// import { createContext } from "react"

// first initialze the context
const UserContext = createContext();

function CreateContext() {}

const divStyle = {
  border: "solid",
  padding: "1rem",
};

const h3Style = {
  textDecoration: "underline",
};

function UseContext() {
  return (
    <>
      <h1 className="heading">React Hooks: useContext</h1>
      <h3 style={h3Style}>Prop Drilling example</h3>
      <div style={divStyle}>
        <PropDrilling />
      </div>
    </>
  );
}

export default UseContext;
