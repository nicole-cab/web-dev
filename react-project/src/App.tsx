import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField.tsx";

// *** TYPESCRIPT TYPES *** -------------------------

let name: string = "Nicole";
let age: number | string = 21; // the character (|) means union/or
let isStudent: boolean = false;
let hobbies: string[] = ["cs2", "football", "rubik's cube"];
let tuple: [number, string] = [5, "hello"];

type Person = {
  name: string;
  age?: number; // the question mark means the property is optional
};

let person: Person = {
  name: "Nicole",
};

let people: Person[]; // array of type Person

function printName(name: string) {
  console.log(name);
}

printName("Nicole");

// you can assign a type of a function
let printName2: (name: string) => void; // void = no return value

let anyType: any; // can be of any type (not recommended)

// if you don't know what a variable's type is going to be use unknown
let personName: unknown; // can also take any type

// void as a return type of a function = returns undefined
// never as a return type of a function = never return a value like functions with loops or functions that throw errors

// in TypeScript you can define types in two ways: using type aliases and interfaces
// type aliases allow defining types with a custom name (alises)
// type is used to use an alias for primitive types, or for creating types as objects and arrays

type CarYear = number;
const carYear: CarYear = 2023;

type Car = {
  year: CarYear;
};

const car: Car = {
  year: carYear,
};

// interfaces are like type aliases except they only apply to object types

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

// you can extend an interface

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};

// you can also do this using type by using intersection

type ColoredCar = Car & {
  color: string;
};

const coloredCar: ColoredCar = {
  year: 2023,
  color: "red",
};

// interfaces can't express unions, mapped types, or conditional types
//    when using objects that inherit use interface because they're faster than using &
//    interfaces with the same name in the same scope merge their declarations
// type aliases can express any type

type StringOrNumber = string | number;

// TS docs recommends you use interface by default, and type if you need to, but because of merging declarations type aliases can help spot bugs easier, use interface for object inheritance

// you can extend/intersection a type and an interface

// --------------------------------------------------

// function/component name must start with an upper case letter
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
