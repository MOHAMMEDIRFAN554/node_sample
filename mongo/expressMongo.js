const express = require('express');
const bodyParser = require('body-parser');
const mongoDb = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new mongoDb(url);
const dbName = 'students';

const app = express();
app.use(bodyParser.json());


function findOneStudent(dbo) {
    dbo.collection("Students").findOne({})
        .then(data => console.log("Found one student:", data))
        .catch(err => console.error("err:", err));
}

function insertData(dbo, student) {
    dbo.collection("Students").insertOne(student)
        .then(data => console.log("Inserted student:", data))
        .catch(err => console.error("err:", err));
}

function insertMultipleData(dbo) {
    const students = [
        { name: "Riya", age: 21, course: "Biology", mark: 42, Remark: "Good", Place: "Kollam" },
        { name: "Arjun", age: 23, course: "Computer Science", mark: 48, Remark: "Excellent", Place: "Trivandrum" },
        { name: "Neha", age: 20, course: "History", mark: 36, Remark: "Average", Place: "Kochi" },
        { name: "Vikram", age: 22, course: "Mathematics", mark: 50, Remark: "Excellent", Place: "Calicut" }
    ];
    dbo.collection("Students").insertMany(students)
        .then(data => console.log("Inserted multiple students:", data))
        .catch(err => console.error("err:", err));
}

function insertTeacher(dbo, teacher) {
    dbo.collection("Teachers").insertOne(teacher)
        .then(data => console.log("Inserted teacher:", data))
        .catch(err => console.error("err:", err));
}


function getDb(req, res, next) {
    if (!client.isConnected?.()) {
        client.connect()
            .then(() => {
                req.dbo = client.db(dbName);
                next();
            })
            .catch(err => res.status(500).json({ error: err.message }));
    } else {
        req.dbo = client.db(dbName);
        next();
    }
}

function validateStudent(student) {
    const { name, age, course, mark, Remark, Place } = student;
    if (!name || !age || !course || !mark || !Remark || !Place) return false;
    if (typeof age !== 'number' || age < 10 || age > 100) return false;
    if (typeof mark !== 'number' || mark < 0 || mark > 100) return false;
    return true;
}

function validateTeacher(teacher) {
    const { name, subject, age } = teacher;
    if (!name || !subject || !age) return false;
    if (typeof age !== 'number' || age < 20 || age > 70) return false;
    return true;
}


app.get('/students/getAll', getDb, (req, res) => {
    req.dbo.collection("Students").find({}).toArray()
        .then(students => res.json(students))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/students/getAllUsersWithPagination', getDb, (req, res) => {
    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const pageCount = parseInt(req.query.pageCount) || 5;

    req.dbo.collection("Students")
        .find({})
        .skip((pageNumber - 1) * pageCount)
        .limit(pageCount)
        .toArray()
        .then(students => res.json(students))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/students/addStudent', getDb, (req, res) => {
    const student = req.body;
    if (!validateStudent(student)) return res.status(400).json({ error: "Invalid student data" });

    req.dbo.collection("Students").insertOne(student)
        .then(result => res.json({ message: "Student added", result }))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/students/averageMark', getDb, (req, res) => {
    req.dbo.collection("Students").aggregate([
        { $group: { _id: null, averageMark: { $avg: "$mark" } } }
    ]).toArray()
        .then(result => res.json({ averageMark: result[0]?.averageMark || 0 }))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/students/oldestStudent', getDb, (req, res) => {
    req.dbo.collection("Students").find({}).sort({ age: -1 }).limit(1).toArray()
        .then(student => res.json(student[0]))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/students/youngestStudent', getDb, (req, res) => {
    req.dbo.collection("Students").find({}).sort({ age: 1 }).limit(1).toArray()
        .then(student => res.json(student[0]))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/students/highestMarkStudent', getDb, (req, res) => {
    req.dbo.collection("Students").find({}).sort({ mark: -1 }).limit(1).toArray()
        .then(student => res.json(student[0]))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/students/nameAgeProjection', getDb, (req, res) => {
    req.dbo.collection("Students")
        .find({}, { projection: { name: 1, age: 1, _id: 0 } })
        .toArray()
        .then(students => res.json(students))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.delete('/students/dropTempCollection', getDb, (req, res) => {
    req.dbo.collection("TempCollection").drop()
        .then(() => res.json({ message: "TempCollection dropped" }))
        .catch(err => res.status(500).json({ error: err.message }));
});


app.get('/teachers/getAll', getDb, (req, res) => {
    req.dbo.collection("Teachers").find({}).toArray()
        .then(teachers => res.json(teachers))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/teachers/addTeacher', getDb, (req, res) => {
    const teacher = req.body;
    if (!validateTeacher(teacher)) return res.status(400).json({ error: "Invalid teacher data" });

    req.dbo.collection("Teachers").insertOne(teacher)
        .then(result => res.json({ message: "Teacher added", result }))
        .catch(err => res.status(500).json({ error: err.message }));
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
