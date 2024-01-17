// EXPRESS MVC PATTERN

// in this section we reuse the code "8_http_methods.js", we will focus more on the MVC pattern

// MCV: model-view-controller, a software architecture pattern that separates an application into three interconnected components: the Model, the View, and the Controller

const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// ---------- set up middleware to parse data

// *** REUSED CODE
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// apply middleware
app.use("/api/people", people);
app.use("/api/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port number 5000...");
});
