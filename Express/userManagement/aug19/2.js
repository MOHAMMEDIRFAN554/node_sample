const express = require('express');
let PORT = 4000;

const app = express();
app.use(express.json());

let currentId = 1;

let students = [
    { id: currentId++, name: "raju", age: 18, mark: 45, email: "raju@example.com" },
    { id: currentId++, name: "radha", age: 22, mark: 50, email: "radha@example.com" },
    { id: currentId++, name: "dankini", age: 55, mark: 15, email: "dankini@example.com" }
];

app.get("/getAllStudents", (req, res) => {
    res.json(students);
});

app.get("/getStudent/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let student = students.find(s => s.id === id);

    if (!student) {
        return res.send("Student not found with id: " + id);
    }
    res.json(student);
});

app.post("/insertStudent", (req, res) => {
    let { name, age, mark, email } = req.body;

    if (!name || !age || !mark || !email) {
        return res.send("Please provide name, age, mark and email");
    }

    let exists = students.find(s => s.email === email);
    if (exists) {
        return res.send("Student with this email already exists: " + email);
    }

    let newStudent = {
        id: currentId++,
        name,
        age: parseInt(age),
        mark: parseInt(mark),
        email
    };
    students.push(newStudent);

    res.send("Insert success with id: " + newStudent.id);
});

app.delete("/deleteStudent/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let i = students.findIndex(s => s.id === id);

    if (i === -1) {
        res.send("Student not found with id: " + id);
    } else {
        let removed = students.splice(i, 1);
        res.send("Deleted student: " + removed[0].name);
    }
});

app.put("/updateStudent/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let { newName, newAge, newMark, newEmail } = req.body;

    let i = students.findIndex(s => s.id === id);
    if (i === -1) {
        return res.send("Student not found with id: " + id);
    }

    if (newName) students[i].name = newName;
    if (newAge) students[i].age = parseInt(newAge);
    if (newMark) students[i].mark = parseInt(newMark);
    if (newEmail) {
        let duplicate = students.find(s => s.email === newEmail && s.id !== id);
        if (duplicate) {
            return res.send("Another student already has this email: " + newEmail);
        }
        students[i].email = newEmail;
    }

    res.send("Updated student with id: " + id);
});

app.delete("/deleteAllStudents", (req, res) => {
    students.length = 0;
    res.send("All students deleted successfully");
});

app.listen(PORT, () => {
    console.log("Server started at", PORT);
});
