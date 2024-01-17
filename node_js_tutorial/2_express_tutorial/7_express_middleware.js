// EXPRESS MIDDLEWARE

// they are functions that execute during the request to the server
// they have access to req and res
// req => middleware => res

// there are two ways of applying middleware:
// - use: to apply to all routes or routes with a specific base/path (app.use(middlewareFunc), app.use("/api", middlewareFunc))
// - route: for that specific route (app.get("/about", middlewareFunc, (req, res)=>{}))

// you can execute multiple middleware using an array
// e.g. app.use("/api", [middlewareFunc1, middlewareFunc2])
// e.g. app.get("/about", [middlewareFunc1, middlewareFunc2])

// there are 3 types of middleware:
// - your own middleware: your own functions
// - express middleware: express like express.static() in app.use(express.static("./public"))
// - third party middleware: from other npm modules such as "morgan" an npm module for logging

const express = require("express");

const app = express();

// ---------- passing a middleware to a route/function

// express supplies the parameters
// when using a middleware you MUST pass the next middleware OR send a response directly
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log("logger: ", method, url, time);
  //   res.send("Testing"); // send response directly
  next(); // pass it to the next middleware, in this case back to the home page route/api function
};

// you can attach a middleware (logger)
app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

// middleware can be reused in other functions
app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

// app.listen(5000, () => {
//   console.log("Server is listening on port number 5000...");
// });

// ---------- using the same middleware for any route without manually passing it

// you can place the middleware in other files
const logger2 = require("./logger");
const app2 = express();

// to invoke the middleware for any route, specifically for all the routes after you invoke app.use
// if you place it after the home route, then only the routes after app.use will execute the middleware
app2.use(logger2);

const middleware_example = (req, res, next) => {
  console.log("middleware used");
};
// you can specify what routes will use the middleware
// it will apply the middleware to the path and any route after that path e.g. /api, /api/products, /api/products/2]
// i.e. the path will be used as the base
// if you omit the path, it will be applied to all paths after it is invoked
app2.use("/api", middleware_example);

const authorize = require("./authorize");
app2.use(authorize);

app2.get("/", (req, res) => {
  res.send("Home");
  console.log(req.user);
});

// you can use multiple middleware functions
app2.use("/about", [logger2, authorize]);

app2.get("/about", (req, res) => {
  res.send("About");
});

app2.get("/api/products", (req, res) => {
  res.send("Products");
});

app2.get("/api/items", (req, res) => {
  res.send("Items");
});

app2.listen(5000, () => {
  console.log("Server is listening on port number 5000...");
});
