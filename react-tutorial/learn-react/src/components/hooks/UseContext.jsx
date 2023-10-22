import { useState, createContext, useContext } from "react";
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
// STEP1) import { createContext, useContext } from "react"

// STEP2) initialze the context
const UserContext = createContext();

function CreateContext() {
  const [user, setUser] = useState("Jesse Hall");

  // STEP3) use the Context Provider to wrap the tree of components that need the state Context, and supply the state value "user"
  // now all the components in this tree will have access to the user Context
  // to access the state Context, see STEP4
  return (
    <UserContext.Provider value={user}>
      <h1>Component 1</h1>
      <h1>{`Hello ${user}!`}</h1>
      <Component2Context />
    </UserContext.Provider>
  );
}
function Component2Context() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3Context />
    </>
  );
}
function Component3Context() {
  // to access the state Context at any level of the tree of components, instead of having to pass a value from level to level, a component can just access the value directly using the "useContext" hook and the context created at the beginning as the argument
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

// ------------------------------

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
      <h3 style={h3Style}>Create Context example</h3>
      <div style={divStyle}>
        <CreateContext />
      </div>
    </>
  );
}

export default UseContext;
