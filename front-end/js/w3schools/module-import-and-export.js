// MODULE IMPORT AND EXPORT

// a module is a js file that executes in strict mode, this means that any variables or functions declared in the module won't be added automatically to the global scope

// let's say you have this directory
// ├── index.html
//      └── js
//      ├── index.js
//      └── lib.js

// in the lib.js you have a function display() which returns the string "Hi"

// STEP 1) to use the function display from lib.js inside the index.js file you have to export the function in the lib.js like this:
//      export { display }; after the function is defined or
//      export function display() {...}; during function definition
// this allows you to use the function in other modules


// STEP 2) import the display function from the lib.js module into the index.js file using the import statement like this:
//      import { display } from './lib.js';


// STEP 3) add the type="module" to the script tag in the index.html tp instruct the web browser to load the index.js file as a module

// --------------------------------------------------

// DYNAMIC IMPORT

// you can dynamically import modules using import(moduleSpecifier) which returns a Promise that will be fulfilled once the module is loaded completely:

// moduleSpecifier in import(moduleSpecifier) can be an expression that evaluates to a string

// btn.addEventListener('click', () => {
//     import('./lib.js')
//         .then((lib) => {
//             lib.display();
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });

// you can also use async/await since import() returns a Promise

// btn.addEventListener('click', async () => {
//     try {
//         let lib = import('./lib.js');
//         lib.display();
//     } catch (error) {
//         console.log(error);
//     }
// });

// the moduleSpecifier in import(moduleSpecifier) can be computed
// e.g:

// let lang = `message_${getUserLocale()}.js`;
//
// import(lang)
//     .then(...);

// you can use object destructuring if the module you are importing has multiple functions you want to use:

// ...
// let { function1, function2 } = await import('./lib.js);
// function1();
// function2();
// ...

// you can dynamically load multiple modules using Promise.all()

// Promise.all([
//     import(module1),
//     import(module2)])
//     .then(([module1, module2]) => {
//         // use modules
//     });

// --------------------------------------------------

// ACCESSING THE DEFAULT EXPORT

// you can access the default export of a module like this:

// import(moduleSpecifier)
//     .then((module) => {
//         console.log(module.default);
//     });

// this is the function from lib.js

// export default function display() {
//     return "Hi";
// }

// its like renaming a function to default
