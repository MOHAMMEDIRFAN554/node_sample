const mongoDb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new mongoDb(url);
const indexRouter = require('./routes/index.route')
app.use('',indexRouter)
const dbName = 'students';

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

function findAllStudents(dbo) {
    dbo.collection("Students").find({}).toArray()
    .then(students => console.log("All students:", students))
    .catch(err => console.error("err:", err));
}

function findByAgeCondition(dbo, minAge, maxAge) {
    dbo.collection("Students").find({ age: { $gte: minAge, $lte: maxAge } }).toArray()
    .then(students => console.log(`Students aged between ${minAge} and ${maxAge}:`, students))
    .catch(err => console.error("err:", err));
}

function deleteOneData(dbo, filter) {
    dbo.collection("Students").findOneAndDelete(filter)
    .then(data => console.log("Deleted student:", data.value))
    .catch(err => console.error("err:", err));
}
function deleteManyByMark(dbo, mark) {
    dbo.collection("Students").find({ mark }).toArray()
    .then(students => {
        dbo.collection("Students").deleteMany({ mark })
        .then(result => {
            console.log(`Deleted ${result.deletedCount} student(s) with mark = ${mark}:`);
            students.forEach(s => console.log(s.name));
        })
        .catch(err => console.error("err:", err));
    })
    .catch(err => console.error("err:", err));
}

function updateByName(dbo, name, updateFields) {
    dbo.collection("Students").updateOne({ name }, { $set: updateFields })
    .then(result => console.log(`Updated ${result.modifiedCount} student(s) with name = ${name}`))
    .catch(err => console.error("err:", err));
}

function updateByEmail(dbo, email, updateFields) {
    dbo.collection("Students").updateOne({ email }, { $set: updateFields })
    .then(result => console.log(`Updated ${result.modifiedCount} student(s) with email = ${email}`))
    .catch(err => console.error("err:", err));
}

function addEmailToAll(dbo) {
    dbo.collection("Students").updateMany({}, { $set: { email: "student@school.com" } })
    .then(result => console.log(`Added email to ${result.modifiedCount} student(s)`))
    .catch(err => console.error("err:", err));
}

function addEmailByName(dbo, name, email) {
    dbo.collection("Students").updateOne({ name }, { $set: { email } })
    .then(result => console.log(`Email added/updated for ${name}`))
    .catch(err => console.error("err:", err));
}

function getStudentsUsingProjection(dbo, pageNumber, pageSize) {
    dbo.collection("Students")
    .find({}, { projection: { course: 0, Place: 0, Remark: 0, _id: 0, email: 0 } })
    .limit(pageSize)
    .skip((pageNumber - 1) * pageSize)
    .toArray()
    .then(result => console.log(`Page ${pageNumber}:`, result))
    .catch(err => console.error("err:", err));
}

client.connect().then(db => {
    const dbo = db.db(dbName);

   
    insertData(dbo, { name: "Tanya", age: 24, course: "Physics", mark: 44, Remark: "Good", Place: "Ernakulam" });
    insertMultipleData(dbo);
    findOneStudent(dbo);
    findAllStudents(dbo);
    findByAgeCondition(dbo, 20, 23);
    deleteOneData(dbo, { name: "Neha" });
    deleteManyByMark(dbo, 50);
    updateByName(dbo, "Riya", { mark: 45, Remark: "Very Good" });
    addEmailToAll(dbo);
    addEmailByName(dbo, "Vikram", "vikram@school.com");
    updateByEmail(dbo, "vikram@school.com", { mark: 48, Remark: "Excellent" });
    getStudentsUsingProjection(dbo, 1, 2);
    getStudentsUsingProjection(dbo, 2, 2);

}).catch(err => {
    console.error("err:", err)
}).finally(()=>{
    console.log("DB operations")
})
