// 14) EVENT LOOP

// perform non-blocking/async I/O operations by offloading operations to the system kernel whenever possible

// the event loop is an endless loop, which waits for tasks, executes them, and then sleeps until it receives more tasks
// the event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task
// the event loop allows us to use callbacks and promises
// the event loop executes the tasks starting from the oldest first

// example
console.log("this is the first statement");

// async function
setTimeout(function () {
  console.log("this is the second statement");
}, 1000);

console.log("this is the third statement");

// first statement pushed to call stack
// first statement is executed and popped from the stack
// setTimeout pushed to the event queue and the task is sent to the OS and the timer is set for the task
// this task is then popped from the stack
// third statement is pushed to the call stack
// third statement is executed and popped from the stack
// when the timer set by setTimeout runs out, the callback is sent to the event queue
// when the call stack becomes empty, the event loop takes the task at the top of the event queue and sends it to the call stack
// the callback function for the setTimeout function is executed and the task is popped from the stack

// ---------- event loop notes: (BETTER NOTES)
// https://www.youtube.com/watch?v=lqLSNG_79lI
// https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62

// js is single-threaded

// when we call a function, the function is pushed to the call stack
// example: console.log, db query then console.log
//      console.log pushed to stack, executed and popped
//      db query pushed to call stack, sent to the libuv api inside node.js built with c++ to run asynchronously (offload js single thread) then popped from the call stack
//      other console.log is pushed to the call stack, executed and popped

// after js offloads the async function (db query) to the libuv api, the libuv api processes the task and when it is done it is going to add the callback to the event queue
// the event loop is constantly looking at the event queue for events
// the event loop will only send the events (in this case the callback) to the call stack once the call stack is empty
// if the callback is another async function then the same process repeats (offloaded to libuvi then to then to the event queue then to the call stack)
