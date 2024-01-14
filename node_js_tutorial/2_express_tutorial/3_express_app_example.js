const express = require("express");
const path = require("path");

const app = express();

// set up static and middleware
// common practice is to name the folder "public"
// all the static files should be placed in the public folder
// static file - doesn't change, e.g. image, css, js files (for the server js is a static file)
app.use(express.static("./public")); // express will set up the paths of the resources, the content-type, the status code, etc

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./app_example/index.html")); // all the resources the html relies on like the css and svg file are in the public folder and express will set it up automatically no need to manually send these resources
// });

// another way of serving the index.html and its resources is just to place both the html and the resources in the public folder, and express will automatically serve them in the "/" path

app.all("*", (req, res) => {
  res.status(404).send("404 resource not found");
});

app.listen(5000);
