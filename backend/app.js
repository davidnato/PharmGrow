const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { routerManager } = require("./routes/rts");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");

dotenv.config({ path: "./.env" });

app.use("/", routerManager);
app.post("/users/:id", (req, res) => {
  res.status(200).send(req.params.id);
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

// app.set("view engine", "hbs");

// app.use("/", require("./routes/rts"));

app.listen(5001, (req, res) => {
  console.log("Server is running on port 5001");
});
