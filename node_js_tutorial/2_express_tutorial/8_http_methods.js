// HTTP METHODS

// there are 4 most used http methods:
// - GET: read data, e.g. localhost/api/orders, get all orders; or localhost/api/orders/:id, get single order (path params)
// - POST: insert data, e.g. localhost/api/orders, place an order (send data)
// - PUT: update data, e.g. localhost/api/orders/:id, update specific order (params + send data)
// - DELETE: delete data, e.g. localhost/api/orders/:id, delete order (path params)

// in this section we will create:
// - get request to get an array of person objects
// - post requests from html(form - action - method), and javascript(fetching data using axios)
// - put requests

const express = require("express");
const app = express();
let { people } = require("./data");

// ---------- set up middleware to parse data

// set up the methods-public folder as our static folder
app.use(express.static("./methods-public"));

// parse form data
// notes: You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
// express.urlencoded(): a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
// extended flag: choose between parsing the url encoded data with the "querystring" library (false) or the "qs" library (true), default is true
// it will encode the form data as a query string parameter
app.use(express.urlencoded({ extended: false })); // without this req.body would be undefined as it would not accept the incoming req data

// parse json data
// it will encode the data as a json
app.use(express.json());

// ---------- get request

// sends back the people array (request made using traditional form)
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// ---------- post requests (from html and js)

// receives data from the user and sends back data based on user data
// this example is using a traditional form (<form action="/login" method="post">)
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  // if the user has entered a value to the input "name"
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(404).send("Please provide credentials");
});

// receives user data and sends data back (request made using js axios)
app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "please provide name value" });
  }

  res.status(201).send({ success: true, person: name });
});

// postman is an api platform (see bottom of file for more details)
// post req: insert data based on user data
app.post("/api/postman/people", (req, res) => {
  console.log("postman route used");
  const { name } = req.body;
  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "please provide name value" });
  }
  // if name received, then send back people and add the name to the array
  // usually we would be working with a db so could insert the new person to the db and return "people"
  res.status(201).send({ success: true, data: [...people, name] });
});

// ---------- put request (convention: "/api/orders/:id" using route params)

// receives user data, and updates data based on user data
app.put("/api/people/:id", (req, res) => {
  console.log("put req used");
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => {
    // if id matches
    if (person.id === Number(id)) {
      return person;
    }
  });
  // if id doesn't exist
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  // if the id exists, then update the name (you would be updating the db but here we use non-persistent data)
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  // if the update is successful
  res.status(200).json({ succes: true, data: newPerson });
});

// ---------- delete request (convention: "/api/orders/:id" using route params)

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => {
    // if id matches
    if (person.id === Number(id)) {
      return person;
    }
  });
  // if id doesn't exist
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  // return people without the person (same as deleting person in db)
  // filter out person with this id
  const newPeople = people.filter((person) => {
    if (person.id !== Number(id)) {
      return person;
    }
  });

  // if the id exists delete that person (in here we just filter it out)
  res.status(200).json({ success: true, data: newPeople });
});

// ---------- make server live

app.listen(5000, () => {
  console.log("Server is listening on port number 5000...");
});

// ---------- better to way to test apis is using postman

// postman is an api platform that helps you test apis faster
// it is slow to create the front end and send requests everytime you want to test an api you created, postman makes it easier to create the requests without front-end
// no need to create the posts requests in js beforehand you can use postman
