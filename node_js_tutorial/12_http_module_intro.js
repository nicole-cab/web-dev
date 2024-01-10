// 12) HTTP BUILT-IN MODULE (INTRO)

const http = require("http");

// accepts a callback function with two parameters (incoming request, what we are sending back)
const server = http.createServer((req, res) => {
  //   console.log(req);
  // req.url is the endpoint the client is requesting
  if (req.url == "/") {
    res.write("Welcome to our home page"); // writes a response to the client
    res.end(); // end request is necessary
  }
  // another endpoint
  if (req.url == "/about") {
    res.end("Here is our short history"); // equivalent to res.write(data, encoding) then res.end(callback)
  }
  // default response if endpoint does not exist
  res.end(
    `<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`
  ); // you can send html
});

// specify the port
server.listen(5000);
