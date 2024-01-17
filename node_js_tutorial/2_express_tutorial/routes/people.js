const express = require("express");

const router = express.Router();

// get the functionality from the controllers folder
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// // this is one way to route requests
// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/", updatePerson);
// router.delete("/:id", deletePerson);

// this is another way to route requests (the set up you is just preference)
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

// exports
module.exports = router;
