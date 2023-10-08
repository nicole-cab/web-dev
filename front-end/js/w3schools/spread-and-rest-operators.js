// SPREAD AND REST OPERATORS

// a rest parameter is a new kind of parameter which allows you to represent an indefinite number of arguments as an array, it has the prefix (...)

// rest parameters must appear at the end of the argument list or else you get a Syntax Error

// there must be only one rest operator per js function

function fn(a, b, ...args) {
    // ...args is a rest parameter
    // the first parameter maps to a
    // the second one to b
    // the third, fourthm etc. will be stored in the rest parameter args as an array e.g. fn(1, 2, 3, "A", "B", "C"); the args array stores [3, "A", "B", "C"]
    // if you pass only two parameters args will be an empty array

}

// you can use for..of to iterate over the rest parameter array

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

console.log(sum(1, 2, 3));

// the spread operator allows us to quickly copy all or part of an existing array or object into another array or object, it has the same prefix as a rest operator

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// combine it with object destructuring

const [one, two, ...rest] = numbersCombined;
console.log(rest);

// you can use it in objects too

const myVehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "red"
}

const updateMyVehicle = {
    type: "car",
    year: 2011,
    color: "yellow"
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle);
