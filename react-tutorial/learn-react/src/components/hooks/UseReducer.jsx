import { useReducer, useRef } from "react";
// useReducer allows for custom logic
// useReducer is useful for keeping track of multiple pieces of state that rely on complex logic
// useReducer(<reducer>, <initialState>) returns the current state and a dispatch method
//      the <reducer> function contains your custom state logic
//      the <initialState> can be a simple value, but generally contains an object

const initialTodos = [
  { id: 1, title: "Todo 1", complete: false },
  { id: 2, title: "Todo 2", complete: false },
];

// logic to keep track of the todo complete status
// all the logic to add, delete, and complete a todo could be contained within a single useReducer hook by adding more actions
// state is the current todo list in this case
const reducer = (state, action) => {
  // action.type holds the value sent when dispatch was called, in this case {type: "COMPLETE", id: todo.id}
  switch (action.type) {
    case "COMPLETE":
      // this will return a new state (a new state of the todo list) which only updates the todo checked
      return state.map((todo) => {
        // it will find the todo checked by id, and change its property "complete" to true, and keep the other todos the same (else)
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      // default is to return the same state intact (the current todo list)
      return state;
  }
};

function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    // whatever is sent from dispatch is what the "action" parameter object in the reducer function will contain
    // by having different event handlers, we can send different objects inside the dispatch method, which will be relevant to the logic you are trying to do, e.g. if the logic is to add a todo, then you can you dispatch({type: "AddUser", title: newTitle}) and in the reducer function add a new case "AddUser"
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      <h1 className="heading">React Hooks: useReducer</h1>
      <h3>Todos</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
      {todos.map((todo) => (
        <p>{`{ID: ${todo.id}, TITLE: ${todo.title}, COMPLETE: ${todo.complete}}`}</p>
      ))}
    </>
  );
}

export default UseReducer;
