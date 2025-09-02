const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const PORT = 4000
const app = express();
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'students';

app.get('/getName', (req, res) => {
    let name = req.query.name

    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.collection("Students").findOne({ name: name }).then(result => {
            res.json(result)
        })
    }).catch(err => {
        res.send('error' + err)
    })
})
app.get('/pagenation', (req, res) => {
    let pageNumber = parseInt(req.query.pageNumber)
    let limit = parseInt(req.query.limit)

    let skip = (pageNumber - 1) * limit;
    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.collection("Students").find().skip(skip).limit(limit).toArray().then(result => {
            res.json(result)
        }).catch(err => {
            res.send('error' + err)
        })
    })
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
