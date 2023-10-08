// OBJECT DESTRUCTURING

let person = {
    firstName: "John",
    lastName: "Doe"
}

// the old way

let firstName1 = person.firstName;
let lastName1 = person.lastName;

// es6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables

let { firstName: fName, lastName: lName } = person;
// firstName and lastName are assigned to fName and lName variables respectively

// if the variables have the same names as the property names we can write a more concise way

let { firstName, lastName } = person;

// when you assign a property that does not exist to a variable using object destructuring, the variable is set to undefined

({ firstName, lastName, middleName } = person); // middleName = undefined

// you can set a default value to the variable when the property of an object does not exist

let person2 = {
    firstName2: "Nicole",
    lastName2: "Cabaya Soriano",
    currentAge: 28
}

let { firstName2, lastName2, middleName = '', currentAge: age = 18 } = person2; // set default value, 3 variables firstName2, lastName2, middleName and age

// a function may return an objec tor null in some situations, if you use the object destructuring syntax to assign a variable the return value of function that returns null, the code will throw a TypeError, to avoid this use the OR operator (||) to fallback the null object to an empty object

function getPerson() {
    return null
}

({ firstName, lastName }) = getPerson() || {}; // firstName and lastName will be undefined

// nested object destructuring

let employee = {
    id: 1001,
    name: {
        firstName3: "Jack",
        lastName3: "Oubridge"
    }
};

let { name: { firstName3, lastName3 } } = employee; // variables declared are firstName3 and lastName3 assigned with "Jack" and "Oubridge" respectively

// you can also do multiple assignment of a property to multiple variables

let employee2 = {
    id: 1001,
    name: {
        firstName4: "Jack",
        lastName4: "Oubridge"
    }
};

let { name: { firstName4, lastName4 }, name } = employee;

// destructuring function arguments

let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

// you can use object destructuring to access properties directly instead of through the object like this

display = ({ firstName, lastName }) => console.log(`${firstName} ${lastName}`);
