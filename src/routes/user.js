const express = require("express");

const router = express.Router();

const userList = [];

router.get("/", (req, res) => {
  res.send({ users: userList });
});

router.post("/", (req, res) => {
  userList.push(req.body.username);
  res.status(200).send({ status: "add user complete" });
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  userList.pop();
  res.send({ status: "delete complete" });
});

module.exports = router;
