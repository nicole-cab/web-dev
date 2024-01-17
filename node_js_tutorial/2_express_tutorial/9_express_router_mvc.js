// EXPRESS MVC PATTERN

// in this section we reuse the code "8_http_methods.js", we will focus more on the MVC pattern

// MCV: model-view-controller, a software architecture pattern that separates an application into three interconnected components: the Model, the View, and the Controller
// - model: structure of data, db schemas
// - view: the user interface part, static/dynamic pages, templates
// - controller:  the request-response handler

// HOW TO USE THE MVC PATTERN: (including a service folder - better folder structure, better pattern)
// ----------
// > Step1) create a "controllers", "routes", "services" and "models" folder
//    - models: define db schemas and db functionality
//    - services: defines specific service/functionality
//    - controllers: uses services to handle requests
//    - routes: to route requests from the index.js to the controllers
// ----------
// > Step2) define your models
// ----------
// > Step3) define your services
//    - for each service:
//        - define the specific functionalities for that service (e.g. list users, insert user, update user, delete user)
//        - export functionalities
//        - here is where you interact with the models/data
// ----------
// > Step4) define your controllers
//    - for each controller:
//        - import the service needed to handle the request and use them here
// ----------
// > Step5) define your routes:
//    - for each route:
//        - create a Router instance as module which is a mountable route handler, a routing system
//        - define routes (which will be mounted to the router module on a path in the main app), e.g. if main app loads the a router module using app.use("/api/people") then the routes on the controller will be mounted on this path, router.post(/postman) would handle the req "/api/people/postman"
//        - set up the middleware/controllers to the routes
//        - export router module
// Step6) link the main app to the routes
//    - in the main app for each router module:
//        - load the router module (const people = require("./routes/people"); app.use("/api/people", people);)
//        - this will connect the main app to the different router modules (mini-apps)
// ----------

const express = require("express");
const app = express();

// load the router modules (STEP5)
const people = require("./routes/people");
const auth = require("./routes/auth");

// ---------- set up middleware to parse data

// *** REUSED CODE
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// apply middleware/routing system (STEP5)
app.use("/api/people", people);
app.use("/api/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port number 5000...");
});
