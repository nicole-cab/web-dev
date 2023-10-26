import { useState, memo, useCallback } from "react";
// useCallback returns a memoized callback function
// think of memoization as caching a value so that it does not need to be recalculated
// this allows us to isolate resource intensive functions so that they will not automatically run on every render
// the useCallback hook only runs when one of its dependencies update, this can improve performance
// useCallback and useMemo are similar, the main difference is that useMemo returns a memoized value and use Callback returns a memoized function

// one reason to use useCallback is to prevent a component from re-rendering unless its props have changed
// e.g. the Todos component will not re-render unless the todos change
function Todos({ todos, addTodo }) {
  console.log("child render");
  return (
    <>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}

Todos = memo(Todos); // (see Memo.jsx for more info on memo)

// try running this and click the count increment button
// you will notice that the Todos component re-renders even when using memo and the todos and addTodo function do not change
// this is because of something called "referential equality", every time a component re-renders, its functions get recreated, because of this, the addTodo function has actually changed
// to fix this, we can use useCallback to prevent the function from being recreated unless necessary, to prevent the Todos component from re-rendering endlessly
// now the Todos component will only re-render when the todos prop changes
function UseCallback() {
  const [useCallbackUsed, setUseCallbackUsed] =
    useState(false);

  const handleToggle = () => {
    setUseCallbackUsed((x) => !x);
  };

  // ------------------------------
  // without useCallback:
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  // ------------------------------
  // using useCallback
  const [countFix, setCountFix] = useState(0);
  const [todosFix, setTodosFix] = useState([]);

  const incrementFix = () => {
    setCountFix((c) => c + 1);
  };

  // only recreate this function when the dependencies, in this case the todos property changes, which will cause the Todos component to not re-render when the UseCallback component re-renders due to its state "count" changing
  const addTodoFix = useCallback(() => {
    setTodosFix((t) => [...t, "New Todo Fix"]);
  }, [todos]);

  return (
    <>
      <h1 className="heading">React Hooks: useCallback</h1>
      <button onClick={handleToggle}>
        Toggle useCallback
      </button>
      {useCallbackUsed ? (
        <div>
          <h3>Todos without useCallback</h3>
          <Todos todos={todos} addTodo={addTodo} />
          <div>
            Count: {count}
            <br />
            <button onClick={increment}>+</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h3>Todos Fix: with useCallback</h3>
            <Todos todos={todosFix} addTodo={addTodoFix} />
            <div>
              Count: {countFix}
              <br />
              <button onClick={incrementFix}>+</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UseCallback;
