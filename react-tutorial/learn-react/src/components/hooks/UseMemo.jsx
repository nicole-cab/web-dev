import { useState, useMemo } from "react";
// the useMemo hook returns a memoized value
// think of memoization as caching a value so that it does not need to be recalculated
// the useMemo only runs when one of its dependencies update, this can improve performance
// useCallback and useMemo are similar, the main difference is that useMemo returns a memoized value and use Callback returns a memoized function

// the useMemo hook can be used to keep expensive, resource intensive functions from needlessly running
// e.g. WITHOUT useMemo: we have an expensive function that runs on every render, when changing the count or adding a todo, you will notice a delay in execution
// e.g. WITH useMemo: now the delay will only happen when changing the count, but not when adding a todo

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function UseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // without useMemo
  //   const calculation = expensiveCalculation(count);

  // with useMemo (the only difference between using useMemo and using it in the demo is this function)
  const calculation = useMemo(
    () => expensiveCalculation(count),
    [count]
  );

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <h1 className="heading">React Hooks: useMemo</h1>
      <h3>Todos with useMemo</h3>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
      <div>Count: {count}</div>
      <button onClick={increment}>+</button>
      <h3>Expensive Calculation</h3>
      {calculation}
    </>
  );
}

export default UseMemo;
