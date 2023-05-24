// Using Router to define API's in structured way
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("GET route on things.");
});

router.post("/", function (req, res) {
  const reqBody = req.body;
  res.send("POST route on things.");
});

router.get("/:id", function (req, res) {
  const id = req.params.id;
  res.send("GET request done with id: " + id);
});

router.get("/:name/:id", function (req, res) {
  const name = req.params.name;
  const id = req.params.id;
  res.send(`GET request done with name: ${name} and id: ${id}`);
});

module.exports = router;
