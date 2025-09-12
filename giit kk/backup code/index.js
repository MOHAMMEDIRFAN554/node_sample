const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'userDb';
const collectionName = "students";


client.connect().then(db=> {
    console.log("connected");

    let dbo = db.db(dbName);

    let newData = {
         name: 'Athulya',
        age: 25,
        mark: 41,
        password: 543,
        place: 'Kottayam',
        active: true
    }

    let arr  = [{}, {}]
    dbo.collection(collectionName).insertOne(newData).then(result=> {
        console.log("result", result);
    }).catch(err=> {
        console.log("err ", err)
    }).finally(() => {
        db.close();
    })

    // dbo.collection(collectionName).findOne({"name" : "Sali"}).then(result => {
    //     console.log("result ", result)
    // }).catch(err=> {
    //     console.log("err ", err)
    // }).finally(() => {
    //     console.log("closing connection");
    //     db.close();
    // })


    
}).catch(err=> {
    console.log("connection failed ", err)
})




// let dbo = db.db(dbName); // Specify your database name
//     dbo.collection(collectionName).findOne({}).then(data=> {
//         console.log("data ", data)
//         db.close();
//     }).catch(err=> {
//         console.log("err ", err)
//     })