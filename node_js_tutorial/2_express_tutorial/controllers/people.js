let { people } = require("../data");

// handle requests that start with the base name "/api/people" using the people service

// import people service
const {
  queryAllUsers,
  insertPersonByName,
  insertPersonByNamePostman,
  updatePersonById,
  deletePersonById,
} = require("../services/people");

// get all the users
const getPeople = (req, res) => {
  // use service
  const resData = queryAllUsers();

  res.status(200).json(resData);
};

// create a person by name
const createPerson = (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  // use service
  const resData = insertPersonByName(name);

  // if name is not provided
  if (!resData.success) {
    return res.status(404).json(resData);
  }

  // if name provided
  res.status(201).send(resData);
};

// create a person by name (postman)
const createPersonPostman = (req, res) => {
  console.log("postman route used");
  const { name } = req.body;

  const resData = insertPersonByNamePostman(name);

  // if name is not provided
  if (!resData.success) {
    return res.status(404).json(resData);
  }

  // if name provided
  res.status(201).send(resData);
};

// update a person's name by id
const updatePerson = (req, res) => {
  console.log("put req used");
  const { id } = req.params;
  const { name } = req.body;

  const resData = updatePersonById(id, name);

  // if the id does not exist or name not provided
  if (!resData.success) {
    return res.status(404).json(resData);
  }

  // if the update was successful
  res.status(200).json(resData);
};

// delete a person by id
const deletePerson = (req, res) => {
  const { id } = req.params;
  const resData = deletePersonById(id);

  // if id does not exist
  if (!resData.success) {
    return res.status(404).json(resData);
  }

  // if delete was successful
  res.status(200).json(resData);
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
