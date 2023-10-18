// components are like functions that return HTML elements
// they are independent and reusable bits of code

// components come in two types: class components and function components
// it is recommended you use function components along with Hooks, which were added in React 16.8

// the components name must start with an uppercase letter
function Component(props) {
  return <h2>This is a {props.color} Component</h2>;
}

// above we have created a component, to use it write between tags <ComponentName></ComponentName>
// or <ComponentName />
// we can have components inside components
function Components() {
  // you can pass properties to components, which are like function arguments sent to the component as attributes
  return (
    <div>
      <h1 className="heading">React Components</h1>
      <h1>This is how you use a component</h1>
      <Component color="red" />
    </div>
  );
}

// react is all about reusing code, so it is recommended to split your components into separate files, then imported when needed (shown in App.tsx)

// exported to be used by another module, in this case App.jsx
export default Components;
