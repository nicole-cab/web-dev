const loginByName = require("../services/auth");

const login = (req, res) => {
  console.log(req.body);
  // const resData
  const { name } = req.body;
  const resData = loginByName(name);

  // if name provided
  if (resData.success) {
    return res.status(200).json(resData);
  }
  res.status(404).json(resData);
};

module.exports = login;
