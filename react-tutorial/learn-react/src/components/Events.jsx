// react has the same events as HTML
// react events are written in camelCase syntax, e.g. onClick instead of onclick
// react event handlers are inside curly braces, e.g. onClick={shoot} instead of onclck="shoot()"

function Events() {
  // place the onClick function inside the component
  const shoot = () => {
    alert("Great Shot!");
  };

  // you can pass arguments to event handlers using an arrow function
  // e.g. onClick={() => shoot2("Goal!")}
  const shoot2 = (a) => {
    alert(a);
  };

  // event handlers have access to the react event that triggered the function
  const shoot3 = (a, b) => {
    alert(a + " event type: " + b.type);
  };

  return (
    <>
      <h1 className="heading">React Events</h1>
      <button onClick={shoot}>Take the Shot!</button>
      <br />
      <button onClick={() => shoot2("Goal!")}>Take another Shot!</button>
      <br />
      <button onClick={(event) => shoot3("Another Goal!", event)}>
        Maybe Another One?
      </button>
    </>
  );
}

export default Events;
