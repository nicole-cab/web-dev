// in react you can render lists using the js map() array method
// in react you need keys to keep track of elements, for when they are updated or removed, so that only that item is re-rendered instead of the entire list
// keys need to be unique to each sibling, but can be duplicated globally
// generally the key should be a unique ID assigned to each item, as a last resort you can use the array index as a key
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Lists() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1 className="heading">React Lists</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Lists;
