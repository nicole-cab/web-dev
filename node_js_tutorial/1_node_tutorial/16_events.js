// 16) EVENT-DRIVEN PROGRAMMING

// common practice is to call it EventEmitter
const EventEmitter = require("events"); // returns a class

// 2 options: extend the class or create the instance

// --------- creating the instance
const customEmitter = new EventEmitter();

// some important info:
// the order matters - we first listen to the event then emit it
// we can have multiple listeners to the same event
// we can pass arguments when emitting

// on() listens to an event, in this case "response" and a callback function
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id ${id}`);
});

// we can listen to the same event and perform other tasks
// in this example we don't need the arguments
customEmitter.on("response", () => {
  console.log(`same other logic here`);
});

// emit() emmites an event, in this case the event "response" with some arguments
customEmitter.emit("response", "john", 34);

// ---------- additional info

// you might not write/emit events yourself but you will be handling them as many modules use them for example http (another way to create a server):

const http = require("http");
// using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it/ listen for it/ respond to it
// instead of a callback function (check section 12) we respond to events
server.on("request", (req, res) => {
  res.end("Request received");
});

server.listen(5000);
