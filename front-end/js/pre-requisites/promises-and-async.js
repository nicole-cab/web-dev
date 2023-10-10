// PROMISES AND ASYNC PROGRAMMING

// a promise is an object that has state which can be one of the following: pending, fulfilled with a value or rejected for a reason. in the beginning a promise is pending (async operation is in progress), depending on the result of the async operation, the state changes to either fulfilled or rejected

// creating a promise:

// the Promise constructor acceps a callback function that performs an async operation referred to as an executor, in turn the executor accepts two callback functions with the name resolve and reject

// if successful the executor will call resolve(), then state = fulfilled with a value

// in case of an error the executor will call reject(0, then state = rejected with an error)

const promise = new Promise((resolve, reject) => {
    // contain an operation
    // ...
    let success = true;
    let value = 3;
    let error = "error";

    // return the state
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }

});

// once the promise is created, state = pending
// if a promise reaches fulfilled or rejected, it is resolved

// in practice you rarely cerate promises, instead you use promises provided by libraries

// the then() method is used to get the value of a promuse when it's fulfilled like this:

promise.then(onFulfilled, onRejected); // it accepts two callback functions
// note that both onFulfilled() and onRejected() arguments are optional

// then() calls onFulfilled() with a value if fulfilled, and onRejected() with an error if rejected

// this is how you would use a promise to return an object
success = true;

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { username: 'john', email: 'john@test.con' },
                    { username: 'jane', email: 'jane@test.con' }
                ]);
            } else {
                reject('Failed to the user list');
            }

        }, 1000); // 1sec = 1000ms
    });
}

function onFulfilled(users) {
    console.log(users);
}

function onRejected(error) {
    console.log(error);
}

const promise2 = getUsers();
promise2.then(onFulfilled); // or getUsers().then(onFulfilled);

// you can use arrow functions to define the contents of the onFulfilled function

// ...
// promise.then((users) => {
//     console.log(users);
// });

// the catch() method is used to get the error only when the state of the promise is rejected

promise.catch(onRejected);

// internally catch(onRejected) is the same as then(undefined, onRejected)

// the finally() method is the function that runs after the promise is fulfilled or rejected, always runs at the end. instead of duplicating running the same function in then() or catch() you can just place it in finally()

const render = () => {
    // ...
};

getUsers()
    .then((users) => { console.log(users); })
    .catch((error) => { console.log(error); })
    .finally(() => {
        render();
    });

// --------------------------------------------------

// PROMISE CHAINING

// you can return a value inside the then() once it is resolved which will in turn return a new Promise with a value, therefore you can chain then() methods which use the promise returned by the previous then() method like this:

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

// this is a promise chain
p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});

// the following example is NOT promise chaining, this is just handling the fulfilled promise with multiple handlers

// in practice you rarely use multiple handleres for one promise

p.then((result) => {
    console.log(result); // 10
    return result * 2;
});

p.then((result) => {
    console.log(result); // 10
    return result * 3;
});

p.then((result) => {
    console.log(result); // 10
    return result * 4;
});

// when you return a value inside the then() method, it returns a new Promise that immediately resolves as fulfilled with a return value

// you can also return a promise inside a then() by using "return new Promise()..."

// in promise chaining you can use the following syntax

// step1()
//     .then(result => step2(result))
//     .then(result => step2(result))
//     ...

// or without explicitly passing the result

// step1()
//     .then(step2)
//     .then(step3)
//     ...


// --------------------------------------------------

// USING Promise.all()

// Promise.all(iterable) is a static method that takes an iterable of promises, it returns a single promise that resolves when all the input promises have been resolved, the returned single promise resolves to an array of the results of the input promises
// in other words Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises

// as soon as one of the input pomises is rejected, the Promise.all() method immediately returns a promise that is rejected with an error of the first rejected promise

// all promises are processed at the same time, and which ever gets rejected first, this error will be returned by Promise.all()
// it waits for all promises to be resolved before returning a promise

// in practice Promise.all() is useful to aggregate the results from multiple async operations

// Promise.all([p1, p2, p3]).then((results) => { console.log(results); });


// --------------------------------------------------

// USING Promise.race()

// Promise.race() is a static method that accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or error from that promise

// the name Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected, basically Promise.race() returns the result of the input promises that resolves faster, and it could be either fulfilled or rejected

// Promise.race([p1, p2, p3]).then((result) => { console.log(result); });


// --------------------------------------------------

// USING Promise.any()

// Promise.any() accepts an iterable object

// if one of the input promises is fulfilled, Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise
// it returns the first fulfilled promise, even if the previous ones have been rejected it only focuses on the first fulfilled input promise

// if all the input promises are rejected, Promise.any() will return a promise that rejects with an AggregateError (subclass of Error) containing all the rejection reasons

// use Promise.any() to return the first fulfulled promise, once an input promise is fulfilled, Promise.any() does not wait for other promises to complete

// case use: you have resource served by two or more content delivery networks, to dynamically load the first available resource, you can use Promise.any()

// --------------------------------------------------

// USING Promise.allSettled()

// Promise.allSettled() accepts a list of promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected

// it returns a promise that stays pending until all input promises have been settled either fulfilled or rejected, the returned promise resolves into an array of objects, each object containing the following properties: status and value/reason, which describes the result of each input promise

// let's say we have promise1 and promise2, then

// Promise.allSettled([p1, p2]).then((result) => {
//     console.log(result);
// });

// returns an Array object:
//  [{ status: 'fulfilled', value: 10 }, { status: 'rejected', reason: 20 }]

// --------------------------------------------------

// PROMISE ERROR HANDLING

// let's say we have a function getUser(id) that returns a promise which resolves with an object as the value with the properties username and id

// to catch errors such as checking the id is a number you have two options:

// OPTION1: throw an error outside the returned promise
//      this can be caught by try..catch.. like this

function getUser(id) {
    if (typeof id !== 'number' || id <= 0) { // outside promise
        throw new Error('Invalid id argument');
    }

    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin'
        });
    });
}

// try..catch will catch the error and NOT .catch()
try {
    let id = 3;
    let user = getUser(id);
    console.log(user);
} catch (error) {
    console.log(error);
}

// OPTION2: throw an error inside the returned promise, the .catch() method will catch this as throwing an error inside a promise has the same effect as calling the reject() method

function getUser2(id) {

    return new Promise((resolve, reject) => {
        if (typeof id !== 'number' || id <= 0) { // inside promise
            throw new Error('Invalid id argument');
        }

        resolve({
            id: id,
            username: 'admin'
        });
    });
}

function getUser3(id) {
    let authorized = false;

    return new Promise((resolve, reject) => {
        if (!authorized) {
            reject('Unauthorized access to the user data'); // same as throwing an error
        }

        resolve({
            id: id,
            username: 'admin'
        });
    });
}

// you can either throw an error inside the promise or call reject(), both errors can be caught by .catch() and NOT by try..catch

// if you throw an error inside a promise or call reject() but don't use
//      .catch(), the code after getUser(id).then(...) will not execute because it will cause a runtime error and the program will terminate

// --------------------------------------------------

// ASYNC AND AWAIT

// async and await makes asynchronous code look more like synchronous code = more readable

// if a function returns a Promise, you can place the await keyword in front of the function call: let result = await f();

// await will wait for the Promise returned from the f() to settle. await can only be used inside the async functions

// e.g. running 3 asynchronous operations in sequence:

// async function showServiceCost() {
//     let user = await getUser(100);
//     let services = await getServices(user);
//     let cost = await getSeriveCost(services);
//     console.log(`The service cost is ${cost}`);
// }
//
// showServiceCost();

// the async keyword allows you to define a function that handles asynchronous operations, to use it you just place it in front of the function keyword

// async functions execute asynchronously via the event loop. it always returns a Promise:

// you can use it like this

async function sayHi() {
    return 'Hi';
}

sayHi().then(console.log);

// you can also explicitly return a Promise

async function sayHi2() {
    return Promise.resolve('Hi2');
}

sayHi2().then(console.log);

// you can also use async in the function expressions

let sayHi3 = async function () {
    return 'Hi3';
}

// arrow functions

let sayHi4 = async () => 'Hi';

// methods of  classes

class Greeter {
    async sayHi5() {
        return 'Hi5';
    }
}

// the await keyword waits for a Promise to settle either in a resolved or rejected state, you can only use it inside an async function

// you get an error if you use await outside an async function

// ERROR HANDLING ASYNC AND AWAIT

// if a promise resolves, the "await promise" returns the result
// when the promise is rejected, the "await promise" will throw an error as if there were a throw statement, the async function will throw an error

// you can use try...catch to catch the error

// async function getUser(userId) {
//     try {
//         const user = await Promise.reject(new Error('Invalid User Id'));
//     } catch (error) {
//         console.log(error);
//     }
// }
