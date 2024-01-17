const express = require("express");

const router = express.Router();

let { people } = require("../data");

// ---------- get request

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// ---------- post requests (from html and js)

router.post("/", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "please provide name value" });
  }

  res.status(201).send({ success: true, person: name });
});

router.post("/postman", (req, res) => {
  console.log("postman route used");
  const { name } = req.body;
  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "please provide name value" });
  }

  res.status(201).send({ success: true, data: [...people, name] });
});

// ---------- put request

router.put("/", (req, res) => {
  console.log("put req used");
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => {
    if (person.id === Number(id)) {
      return person;
    }
  });
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ succes: true, data: newPerson });
});

// ---------- delete request

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => {
    if (person.id === Number(id)) {
      return person;
    }
  });
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.filter((person) => {
    if (person.id !== Number(id)) {
      return person;
    }
  });

  res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
