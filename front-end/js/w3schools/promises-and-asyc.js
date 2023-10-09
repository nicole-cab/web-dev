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
            if (sucess) {
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
