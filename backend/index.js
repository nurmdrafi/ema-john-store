const express = require("express");
const app = express(); // create app by calling express()
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectID = require("mongodb").ObjectID;
const port = process.env.POST || 5000;

// use middleware
app.use(cors()); // It allows us to relax the security applied to an API
app.use(express.json()); // For parsing body of POST and PUT Method

// for testing
app.get("/", (req, res) => {
  res.send({ message: "Success" });
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
