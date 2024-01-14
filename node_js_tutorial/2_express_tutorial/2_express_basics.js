// EXPRESS TUTORIAL

// import module
const express = require("express");

// invoke it
const app = express(); // server instance, similar to http.createServer

// express methods:
// app.get - client wants to read data
// app.post - client wants to insert data
// app.put - client wants to update data
// app.delete - client wants to delete data
// app.all - can handle get, post, put or delete methods
// app.use - responsible for middleware
// app.listen - port we listen on

// get(route the client is trying to access, callback function)
// will be invoked everytime the user accesses this route
app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200); // if status not specified express will use 200, but it is good practice to explicitly include it
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// handles all http methods
// * - any route
app.all("*", (req, res) => {
  res.status(404).send("<h1>404 resource not found</h1>"); // you can chain the methods
});

app.listen(5000, () => {
  console.log("Server is listening on port number 5000...");
});
