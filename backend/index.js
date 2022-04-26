const express = require("express");
const app = express(); // create app by calling express()
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectID = require("mongodb").ObjectID;
const port = process.env.POST || 5000;

// use middleware
app.use(cors()); // It allows us to relax the security applied to an API
app.use(express.json()); // For parsing body of POST and PUT Method

require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sw4ok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("emaJohn").collection("products");

    // get all data
    app.get("/products", async (req, res) => {
      const query = req.query;
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      console.log(result);
      res.send(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("Listening to port", port);
});
