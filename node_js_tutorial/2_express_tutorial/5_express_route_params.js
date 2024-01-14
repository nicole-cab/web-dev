// EXPRESS ROUTE PARAMS

const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  // you can choose what specific information to send
  // in this example we don't send the desc of the products
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.send(newProducts);
});

// in express we have route parameters (productID)
// parameter - user provides data
// the parameter will always be a string
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params; // get route parameters
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  ); // convert productID string to number
  if (singleProduct) {
    // check the product exists (valid parameter)
    res.send(singleProduct);
  } else {
    res.send("product does not exist");
  }
});

// route parameters can become complex
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  const { productID, reviewID } = req.params;
  res.send(`productID: ${productID}, reviewID: ${reviewID}`);
});

// not found route
app.all("*", (req, res) => {
  res.status(404).send("404 resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port number 5000...");
});
