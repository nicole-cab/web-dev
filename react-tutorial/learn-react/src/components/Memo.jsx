import { useState, memo } from "react";
// using memo will cause react to skip rendering a component if its props have not changed, this can improve performance

// when you click the increment button the Todos component re-renders, which could cause performance issues
function Todos({ todos }) {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}

// now the Todos component only re-renders when the todos that are passed to it through props are updated
function TodosFix({ todos }) {
  console.log("child render 2");
  return (
    <>
      <h2>My Todos Fix with Memo</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}

// use memo
TodosFix = memo(TodosFix);
// or if the component is in a separate file use
//      export default memo(TodosFix);

function Memo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1 className="heading">React Memo</h1>
      <Todos todos={todos} />
      <TodosFix todos={todos} />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default Memo;
