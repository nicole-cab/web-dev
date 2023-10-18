import { useState } from "react";
// the useState hook allows us to track state in a function component
// state generally refers to data or properties that need to be tracking in an application
// useState accepts an initial state and returns two values: the current state, a function that updates the state
// you can read the state by placing it inside curly braces
// to update the state, we use the state updater function (we should never direcly update state e.g. color="red" is not allowed)
// useState can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these
// we could create multiple state hooks to track individual values or use one state and include an object to track multiple values
function UseState() {
  // color is the current state, setColor is the function returned which is used to update the state
  const [color, setColor] = useState("red"); // initial state of color = "red"
  const [name, setName] = useState("Nicole");
  // using an object to track multiple values
  // since we are tracking an object, we need to reference that object and the property of that object when rendering the component e.g. car.brand

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  // to update one property or multiple without overwritting the entire object, we use the spread operator to keep the rest of the properties even when you only update a few
  const updateCarColor = (newColor) => {
    setCar((previousState) => {
      return { ...previousState, color: newColor };
    });
  };

  return (
    <>
      <h1 className="heading">React Hooks: useState</h1>
      <h3>My favourite color is {color}!</h3>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("yellow")}>
        Yellow
      </button>
      <h3>My name is {name}!</h3>
      <button type="button" onClick={() => setName("Nicole")}>
        Nicole
      </button>
      <button type="button" onClick={() => setName("Jack")}>
        Jack
      </button>
      <h3>
        My {car.brand} is a {car.color} {car.model} from {car.year}
      </h3>
      <button type="button" onClick={() => updateCarColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => updateCarColor("red")}>
        Red
      </button>
    </>
  );
}
export default UseState;
