// 3) MODULES

// CommonJS, every file is a module (by default)
// CommonJS, is a set specifications for organizing and structuring code in a modular way.
// Modules -  encapsulated code (only share minimum)
// split the code into separate files

// you can access whatever is inside the exports object
// > console.log(module);

// you can export anything: variables, functions, other data types

// access the variables shared by 4_modulesExample1.js
// don't need .js extension
const { nicole, jack } = require("./4_modulesExample1"); // start with "./" when using own modules (there are third part modules)

// access the shared function
const sayHi = require("./5_modulesExample2");

// access the object person from 6_modulesExample3.js
const person = require("./6_modulesExample3");

// you can see the shared variable but not the local variable to the exported module
console.log(nicole);

// you can view/use the function
console.log(sayHi);

// you view/use the object, list
console.log(person);
console.log(person.items);
console.log(person.singlePerson);

// access module
// remember that invoking a module will run the module
require("./7_modulesExample4");

// BUILT-IN MODULES (some of them)

// os
// path
// fs
// http
