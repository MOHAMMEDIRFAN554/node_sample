const  ObjectId  = require('mongodb');
const connectDB = require('../db');

// Insert
function insertStudent(req, res) {
    connectDB().then(db => {
        return db.collection("Students").insertOne(req.body);
    })
    .then(() => res.send("Student inserted successfully"))
    .catch(err => res.send("Error: " + err));
}

// Get all
function getAllStudents(req, res) {
    connectDB().then(db => {
        return db.collection("Students").find().toArray();
    })
    .then(result => res.json(result))
    .catch(err => res.send("Error: " + err));
}

// Get by ID
function getStudentById(req, res) {
    connectDB().then(db => {
        return db.collection("Students").findOne(req.body.name);
    })
    .then(result => res.json(result))
    .catch(err => res.send("Error: " + err));
}

// Update
function updateStudent(req, res) {
    connectDB().then(db => {
        return db.collection("Students").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
    })
    .then(() => res.send("Student updated successfully"))
    .catch(err => res.send("Error: " + err));
}

// Delete
function deleteStudent(req, res) {
    connectDB().then(db => {
        return db.collection("Students").deleteOne({ _id: new ObjectId(req.params.id) });
    })
    .then(() => res.send("Student deleted successfully"))
    .catch(err => res.send("Error: " + err));
}

module.exports = {
    insertStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
