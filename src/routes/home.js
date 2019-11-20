const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  if (req.headers.authorization === "Bearer keyxxx") {
    next();
  }

  res.status(403).send({ status: "wrong key" });
});

router.get("/", (request, response) => {
  response.send({ status: "success" });
});

module.exports = router;
