const ObjectId= require('mongodb');
const connectDB = require('../db');

// Insert
function insertTeacher(req, res) {
    connectDB().then(db => {
        return db.collection("Teachers").insertOne(req.body);
    })
    .then(() => res.send("Teacher inserted successfully"))
    .catch(err => res.send("Error: " + err));
}

// Get all
function getAllTeachers(req, res) {
    connectDB().then(db => {
        return db.collection("Teachers").find().toArray();
    })
    .then(result => res.json(result))
    .catch(err => res.send("Error: " + err));
}

// Get by ID
function getTeacherById(req, res) {
    connectDB().then(db => {
        return db.collection("Teachers").findOne({ _id: new ObjectId(req.params.id) });
    })
    .then(result => res.json(result))
    .catch(err => res.send("Error: " + err));
}

// Update
function updateTeacher(req, res) {
    connectDB().then(db => {
        return db.collection("Teachers").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
    })
    .then(() => res.send("Teacher updated successfully"))
    .catch(err => res.send("Error: " + err));
}

// Delete
function deleteTeacher(req, res) {
    connectDB().then(db => {
        return db.collection("Teachers").deleteOne({ _id: new ObjectId(req.params.id) });
    })
    .then(() => res.send("Teacher deleted successfully"))
    .catch(err => res.send("Error: " + err));
}

module.exports = {
    insertTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher
};
