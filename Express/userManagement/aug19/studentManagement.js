const express = require('express');
let PORT = 4000;

const app = express();
app.use(express.json());

let students = [
    { name: "raju", age: 18, mark: 45, email: "raju@example.com" },
    { name: "radha", age: 22, mark: 50, email: "radha@example.com" },
    { name: "dankini", age: 55, mark: 15, email: "dankini@example.com" }
];

app.get("/getAllStudents", (req, res) => {
    res.json(students);
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

    students.push({ name, age: parseInt(age), mark: parseInt(mark), email });
    res.send("Insert success: " + name);
});

app.delete("/deleteStudent", (req, res) => {
    let { email } = req.body;

    if (!email) {
        return res.send("Please provide student email to delete");
    }

    let i = students.findIndex(s => s.email === email);
    if (i === -1) {
        res.send("Student does not exist with email: " + email);
    } else {
        let removed = students.splice(i, 1);
        res.send("Deleted student: " + removed[0].name);
    }
});

app.put("/updateStudent", (req, res) => {
    let { email, newName, newAge, newMark, newEmail } = req.body;

    if (!email) {
        return res.send("Please provide the current student email");
    }

    let i = students.findIndex(s => s.email === email);
    if (i === -1) {
        res.send("Student not found with email: " + email);
    } else {
        if (newName) students[i].name = newName;
        if (newAge) students[i].age = parseInt(newAge);
        if (newMark) students[i].mark = parseInt(newMark);
        if (newEmail) {
            let duplicate = students.find(s => s.email === newEmail);
            if (duplicate) {
                return res.send("Another student already has this email: " + newEmail);
            }
            students[i].email = newEmail;
        }

        res.send(`Updated student with email ${email}`);
    }
});


app.delete("/deleteAllStudents", (req, res) => {
    students.length = 0;
    res.send("All students deleted successfully");
});

app.listen(PORT, () => {
    console.log("Server started at", PORT);
});
