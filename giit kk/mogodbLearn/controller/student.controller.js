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

  function getAllStudents(req, res) {
    dboUser
      .collection(collectionName)
      .find({})
      .toArray()
      .then((result) => {
        res.json(result);
      });
  }

  
function getStudentByName(req, res) {
  dboUser
    .collection(collectionName)
    .findOne({ name: req.query.name })
    .then((result) => {
      res.json(result);
    });
}


function inserStudent(req, res) {
  let data = req.body;
  mongoClient
    .connect()
    .then((db) => {
      let dbo = db.db(dbName);

      dbo
        .collection("students")
        .insertOne(data)
        .then((insertResult) => {
          res.json(insertResult);
        })
        .catch((err) => {
          res.send("Could not insert " + data.name);
        });
    })
    .catch((err) => {
      res.send("Could not connect to db");
    });
}

  module.exports = { getAllStudents, inserStudent, getStudentByName }

