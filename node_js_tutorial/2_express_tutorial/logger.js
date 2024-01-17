const logger2 = (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl; // req.originalUrl = req.baseUrl + req.url (https://expressjs.com/en/api.html#app.use)
  const time = new Date().getFullYear();
  console.log("logger2: ", method, url, time);
  next();
};

module.exports = logger2;
