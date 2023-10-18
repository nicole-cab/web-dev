// in react you can conditionally render components
// you can use an if statement, the logical && operator or using the ternary operator

// using the if statement
function MissedGoal() {
  return <h2>"MISSED!"</h2>;
}

function MadeGoal() {
  return <h2>"GOAL!"</h2>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

// using the && logical operator
// if cars.length > 0 equates to true, then the expression after will render
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}

// using the ternary operator
function Goal2(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

function Conditionals() {
  const cars = ["Ford", "BWM", "Audi"];
  return (
    <>
      <h1 className="heading">React Conditionals</h1>
      <Goal isGoal={true}></Goal>
      <Garage cars={cars} />
      <Goal2 isGoal={false} />
    </>
  );
}

export default Conditionals;
