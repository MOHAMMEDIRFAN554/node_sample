const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const PORT = 4000
const app = express();
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'students'
const studentsCollection = 'Students'
const teacherCollection = 'Teachers'



app.get('/', (req, res) => {
    res.send('Hello from Express and MongoDB!');
});

app.get('/getAll', (req, res) => {
    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.collection(studentsCollection).find().toArray().then(result => {
            res.json(result)
        }).catch(err => {
            res.send(`Error found ${err}`)
        })
    }).catch(err => {
        res.send("Error Found" + err)
    })

})

app.listen(PORT, (err) => {
    if (err) {

        console.log('Error found', err)
    }
    else {


        console.log(`Server running at http://localhost:${PORT}`);
    }
});

