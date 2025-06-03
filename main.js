const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const { id, name } = req.body;
  users.push({ id, name });
});

module.exports = router;