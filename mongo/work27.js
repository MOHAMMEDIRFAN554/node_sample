const express = require('express')
const MongoClient = require('mongodb').MongoClient
const PORT = 4000
const app = express()
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)
const dbName = 'students'


app.get('/', (req, res) => {
    res.send(`/getAll \n`)
})

app.get('/getAll', (req, res) => {
    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.collection('Students').find().toArray().then(result => {
            res.json(result)
        }).catch(err => {
            res.send("error" + err)
        })
    }).catch(err => {
        res.send("error" + err)
    })
})

app.get('/getNameAge', (req, res) => {
    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.collection('Students').find({}, { projection: { name: 1, age: 1 } }).toArray().then(result => {
            res.json(result)
        }).catch(err => {
            res.send("error" + err)
        })

    }).catch(err => {
        res.send("error" + err)
    })
})
app.get('/getNameAgeEx', (req, res) => {
    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.collection('Students').find({}, { projection: { course: 0, email: 0 } }).toArray().then(result => {
            res.json(result)
        }).catch(err => {
            res.send("error" + err)
        })

    }).catch(err => {
        res.send("error" + err)
    })
})
app.get('/pagination', (req, res) => {
    let pageNumber = parseInt(req.query.pageNumber)
    let limit = parseInt(req.query.limit)

    let skip = (pageNumber - 1) * limit

    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.collection('Students').find({}).skip(skip).limit(limit).toArray().then(result => {
            res.json(result)
        }).catch(err => {
            res.send("error" + err)
        })
    }).catch(err => {
        res.send("error" + err)
    })


})
app.get('/createCollection', (req, res) => {
    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.createCollection("NewStudents").then(result => {
            res.send("collection created successfully")
        }).catch(err => {
            res.send("error" + err)
        })
    }).catch(err => {
        res.send("error" + err)
    })
})

app.get('/dropCollection', (req, res) => {
    client.connect().then(connection => {
        let dbo = connection.db(dbName)
        dbo.collection("NewStudents").drop().then(result => {
            if (result) {
                res.send("collection deleted successfully")
            }
            else {
                res.send("cannot delete , collection does not exists")
            }
        }).catch(err => {
            res.send("error" + err)
        })
    }).catch(err => {
        res.send("error" + err)
    })
})


app.listen(PORT, (err) => {
    if (err) {
        console.log("Error Found", err)
    }
    else {
        console.log("Server started successfully at ", PORT)
    }
})