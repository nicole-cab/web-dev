// props stand for properties
// they are arguments passed into React components via HTML attributes
// react props are read-only!

// to send props into a component, you use the same syntax as HTML attributes
// the component (e.g. Car) receives the argument as a props object
// you can send properties as strings using "", variables using "{}" or objects
function Props() {
  let adj = "cool";
  let carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1 className="heading">React Props</h1>
      <Car color="red" adj={adj} brand={carInfo} />
    </>
  );
}

export default Props;

function Car(props) {
  return (
    <h1>
      I am a {props.adj} {props.color} {props.brand.model}
    </h1>
  );
}
