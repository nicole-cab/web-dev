// ES6 CLASSES

class Car { // begin class name with uppercase
    constructor(name) {
        this.brand = name;
    }

    present() {
        return "I have a " + this.brand;
    }
}

// create object
const myCar = new Car("Ford");
console.log(myCar.present());

// inherit all the methods from another class
class Model extends Car {
    constructor(name, mod) {
        super(name); // refers to parent class' constructor
        this.model = mod;
    }

    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

const myCar2 = new Model("Ford", "Mustang");
console.log(myCar2.show());

// ------------------------------

// ES6 ARROW FUNCTIONS

// to write shorter function syntax
let hello = () => {
    return "Hello World";
}

// if the function has only one statement, and the statement returns a value
let hello2 = () => "Hello World 2";

// with parameters
let hello3 = (value) => "Hello " + value;
// if only one statement
hello3 = value => "Hello " + value;

// "this" in arrow functions always represents the object that defined the arrow function where as in regular fuctions "this" represents the object that called the function e.g. window or button

// ------------------------------

// ES6 DESTRUCTURING

// destructuring arrays
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;
console.log(car);

// only some items
const [car2, , suv2] = vehicles;
console.log(suv2);

// to assign values returned from a function to variables
function values() {
    return ["A", "B", "C"];
}

const [a, b, c] = values();
console.log(b);

// destructuring objects
const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
      }
}

function myVehicle({ type, color, brand, model }) {
    const message = "My " + type + " is a " + color + " " + brand + " " + model;
    return message;
}

function myVehicle2({ model, registration: {state} }) {
    const message = "My " + model + " is registered in " + state;
    return message;
}

console.log(myVehicle(vehicleOne));
console.log(myVehicle2(vehicleOne));

// ------------------------------
