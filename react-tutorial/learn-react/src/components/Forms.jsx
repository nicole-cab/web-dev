import { useState } from "react";
// forms in react work the same as in HTML
// the form will submit and the page will refresh, but we generally don't want this to happen in react
// in HTML form data is usually handled by the DOM, in react, it is usually handled by the components
// when handled by the components, all the data is stored in the component state
// you can control changes by adding event handlers in the onChange attribute
// we can use the useState Hook to keep track of each inputs value and prove a "single source of truth" for the entire application
// you can control the submit action using the event handler onSubmit
function SingleInput() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your name is ${name}`);
  };

  return (
    <>
      <h3>Single Input Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" />
        </label>
      </form>
    </>
  );
}

// you can control the values of more than one input field by adding a "name" attribute to each element, and access the fields using event.target.name and event.target.value
function MultipleInputs() {
  const [inputs, setInputs] = useState({}); // intialize with empty object

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.username + " " + inputs.age);
  };

  return (
    <>
      <h3>Multiple Input Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

// in react the textarea is placed in a valye attribute
function TextArea() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(textarea);
  };

  return (
    <>
      <h3>Text Area</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={textarea}
          onChange={handleChange}
          rows={5}
          cols={30}
        ></textarea>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

// the selected value in the drop down list was defined with the "selected" attribute in HTML
// in react, the selected value is defined with a value attribute on the select tag
function Select() {
  const [myCars, setMyCars] = useState({ car1: "Volvo", car2: "Fiat" }); // initially selected

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMyCars((values) => ({ ...values, [name]: value })); // select clicked car
  };

  return (
    <>
      <h3>Select</h3>
      <form>
        <label>
          car 1:
          <select name="car1" value={myCars.car1} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
        </label>
        <br />
        <label>
          car 2:
          <select name="car2" value={myCars.car2} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
        </label>
      </form>
    </>
  );
}

function Forms() {
  return (
    <>
      <h1 className="heading">React Forms</h1>
      <SingleInput />
      <MultipleInputs />
      <TextArea />
      <Select />
    </>
  );
}

export default Forms;
