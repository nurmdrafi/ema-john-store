const express = require("express");
const app = express(); // create app by calling express()
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
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

    // Load Product based on page number and size
    app.get("/products", async (req, res) => {
      console.log(req.query);
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      const query = {};
      const cursor = productCollection.find(query);
      let products;
      if (page || size) {
        /* 
        page: 0---> skip: 0 get: 0-10(10)
        page: 1---> skip: 1*10 get: 11-20(10)
        page: 2---> skip: 2*10 get: 21-30(10)
        page: 3---> skip: 3*10 get: 31-40(10)
        */
        products = await cursor
          .skip(page * size)
          .limit(size)
          .toArray();
      } else {
        products = await cursor.toArray();
      }

      res.send(products);
    });

    // get product count
    app.get("/productsCount", async (req, res) => {
      // const query = {};
      // const cursor = productCollection.find(query);
      // const count = await cursor.count(); // cursor.count() is deprecated
      const count = await productCollection.estimatedDocumentCount();
      // res.send({ count }); send as object or json formate
      res.json(count);
    });

    // use post to get products by ids
    app.post("/productByKeys", async (req, res) => {
      const keys = req.body;
      console.log(keys)
      const ids = keys.map((id) => ObjectId(id));
      const query = { _id: { $in: ids } };
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("Listening to port", port);
});
