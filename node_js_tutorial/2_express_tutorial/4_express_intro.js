// EXPRESS INTRO: API vs SSR, JSON

// express is mostly used for one of these 2 options:
// - API: as an api framework to send data using res.json()
// - SSR: server side rendering to send templates (html, css and js) to render using res.render()

// >>> in this course we will talk about the API option

// ----------express as an API framework

const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  // sends a json response
  // the parameter is converted to json string using JSON.stringify()
  //   res.json([{ name: "john" }, { name: "susan" }]);

  // a better way is to have the json data in another file and just reading it
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server is listening on port number 5000...");
});
