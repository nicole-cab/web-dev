// side note: this is not how to authorize users in an express app
const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user == "john") {
    req.user = { name: "john", id: 3 }; // you can change the value of a parameter for the next middleware to use, in this case back to the route, it will receive {name: "john", id: 3}
    next();
  } else {
    res.status(404).send("unauthorized");
  }
};

module.exports = authorize;
