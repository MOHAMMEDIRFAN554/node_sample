const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const mongoClient = new MongoClient(url);
const dbName = "userDb";
const collectionName = "students";

function insertData(dbo, dataToBeInserted) {
  dbo.collection(collectionName).insertOne(dataToBeInserted).then((result) => {
        console.log("result ", result)
    }).catch(error=> {
        console.log("error ", error)
    })
}

mongoClient.connect().then((db) => {
    console.log("Connected");

    let dbo = db.db(dbName);


    getStudentsWithProjection(dbo, 1);

    getStudentsWithProjection(dbo, 2);

    getStudentsWithProjection(dbo, 3);


    let newUser1 = {
      name: "Fathima",
      age: 23,
      mark: 44,
      password: 642,
      place: "Kochi",
      active: true
    }

    let newUser2 = {
      name: "Ansil",
      age: 22,
      mark: 45,
      password: 908,
      place: "Kollam",
      active: true
    }

    // insertData(dbo, newUser1);
    // insertData(dbo, newUser2);
  })
  .catch((error) => {
    console.log("Cound not connect", error);
  });

  function getStudentsWithProjection(dbo, pageNumber) {
    let pageSize = 2;
    dbo.collection(collectionName).find({}).skip((pageNumber -1) * pageSize).limit(pageSize).toArray().then(result=> {
        console.log("result of page " , pageNumber , result)
    }).catch(err=>  {
        console.log("err", err)
    })
  }
