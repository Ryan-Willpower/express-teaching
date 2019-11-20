const express = require("express");
const bodyParser = require("body-parser");

const home = require("./routes/home");
const userService = require("./routes/user");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/", home);
app.use("/user", userService);

app.listen(8080, "localhost", () => {
  console.log("> server start at http://localhost:8080");
});
