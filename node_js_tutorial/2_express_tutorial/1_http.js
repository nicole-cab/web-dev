// HTTP recap and additional info

// --------- http to create a server - reminder

const http = require("http");

// set up server
// accepts callback function
const server = http.createServer((req, res) => {
  console.log("user hit the server");
  const url = req.url;
  if (url == "/") {
    // to send back some info about the response, first the status code then some headers
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>"); // you can pass the body using write() or end()
    res.end(); // always has to be included in the response to end it
  }
  // about page
  else if (url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>"); // instead of directly writing html, you can just read an html file, place its contents into a variable and use it as the argument
    // if your html includes using other resources such as a style.css, or an image, these resources will be requested to the server and so you can send the resources the same way you send html (e.g. if (url == "/style.css" {...})), remember to use the correct content-type
    // if the html has many resources this means using lots of if statements - better to use express
    res.end();
  }
  // 404 not found
  res.writeHead(404, { "content-type": "text/html" });
  res.write("<h1>404 Page Not Found</h1>");
  res.end();
});

// a port number is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service
// a communication endpoint
// for https the port number used is 443
// in development the port number can be arbitrary, but port numbers 0-1024 are already taken and you shouldnt really be using them
server.listen(5000);
