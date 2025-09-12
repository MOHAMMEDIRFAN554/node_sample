const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const mongoClient = new MongoClient(url);
const dbName = "userDb";
const collectionName = "students";
let dboUser;

mongoClient
  .connect()
  .then((connection) => {
    dboUser = connection.db(dbName);
    console.log("Connected...");
  })
  .catch((err) => {
    res.send("Error in connecting", err);
  });

