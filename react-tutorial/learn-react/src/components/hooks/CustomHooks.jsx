import { useState, useEffect } from "react";
// Hooks are reusable functions
// when you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook
// custom hooks start with "use", e.g. useFetch
// in this demo we will create a custom hook useFetch

// we will use the JSONPlaceholder service to fetch fake data, this is great for testing apps when there is no existing data
// we will use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page

// you can move the fetch logic into a separate file and import it (for reuse) but in this demo i will put everything in one file
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return [data];
}

function CustomHooks() {
  // hard-coded logic for one time use:
  //
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []); // Runs only on the first render (empty array as the dependency argument)

  // ----------------------------------------

  // using the custom hook useFetch to reuse instead
  const [data] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      <h1 className="heading">React Hooks: Custom Hooks</h1>
      {data && (
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

export default CustomHooks;
