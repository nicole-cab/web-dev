// EXPRESS QUERY STRING PARAMS or URL PARAMS
// used by users to send data using the url
// e.g. to query db or filter results

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api/v1/query", (req, res) => {
  // if client's url looks like this: .../api/v1/query?name=nicole&id=3
  // then req.query = {name: "john", id: "3"}
  console.log(req.query); // access query params

  // looking for specific keys
  const { search, limit } = req.query;
  let sortedProducts = [...products]; // sortedProducts is another array instance with the same contents as products, a clone of it
  // changing sortedProducts won't change products

  // if search exist filter by name
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  // if limit exist slice from start to limit number
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
    console.log(sortedProducts);
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched your search");
    return res.status(200).json({ success: true, data: [] }); // need to explicitly return or else multiple responses are sent which yields an error
  }

  return res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("404 resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port number 5000...");
});
