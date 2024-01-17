let { people } = require("../data");

const queryAllUsers = () => {
  return { success: true, data: people };
};

const insertPersonByName = (name) => {
  // if name not provided
  if (!name) {
    return { success: false, msg: "please provide name value" };
  }
  return { success: true, person: name };
};

const insertPersonByNamePostman = (name) => {
  // if name not provided
  if (!name) {
    return { success: false, msg: "please provide name value" };
  }
  return { success: true, data: [...people, name] };
};

const updatePersonById = (id, name) => {
  // find person by id
  const person = people.find((person) => {
    if (person.id === Number(id)) {
      return person;
    }
  });

  // if person with id does not exist
  if (!person) {
    return { success: false, msg: `no person with id ${id}` };
  }

  // if name is not provided
  if (!name) {
    return { success: false, msg: `please provide a name` };
  }

  // update the name of the person if the id exists and a name is provided
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return { succes: true, data: newPerson };
};

const deletePersonById = (id) => {
  // find the person by id
  const person = people.find((person) => {
    if (person.id === Number(id)) {
      return person;
    }
  });

  // if the person does not exist
  if (!person) {
    return { success: false, msg: `no person with id ${id}` };
  }

  // if the person with id exists filter out the person (same as "deleting the person from a db")
  const newPeople = people.filter((person) => {
    if (person.id !== Number(id)) {
      return person;
    }
  });
  return { success: true, data: newPeople };
};

module.exports = {
  queryAllUsers,
  insertPersonByName,
  insertPersonByNamePostman,
  updatePersonById,
  deletePersonById,
};
