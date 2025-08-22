const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const FILE = 'students.json';

function readData() {
    if (!fs.existsSync(FILE)) {
        fs.writeFileSync(FILE, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(FILE));
}

function writeData(data) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function emailExists(email, excludeEmail = null) {
    const students = readData();
    return students.some(
        s => s.email.toLowerCase() === email.toLowerCase() &&
        (!excludeEmail || s.email.toLowerCase() !== excludeEmail.toLowerCase())
    );
}

app.post('/students', (req, res) => {
    const { name, age, mark, email } = req.body;

    if (!name || !age || !mark || !email) {
        return res.json({ error: "All fields (name, age, mark, email) are required" });
    }
    if (name.length < 3) return res.json({ error: "Name must be at least 3 letters" });
    if (isNaN(age)) return res.json({ error: "Age must be a number" });
    if (age < 17 || age > 30) return res.json({ error: "Age must be between 17 and 30" });
    if (isNaN(mark)) return res.json({ error: "Mark must be a number" });
    if (mark < 0 || mark > 100) return res.json({ error: "Mark must be between 0 and 100" });
    if (!/\S+@\S+\.\S+/.test(email)) return res.json({ error: "Invalid email format" });
    if (emailExists(email)) return res.json({ error: "Email already exists" });

    const students = readData();
    students.push({ name, age, mark, email });
    writeData(students);

    res.json({ message: "Student added successfully" });
});

 app.put('/students/:email', (req, res) => {
    const oldEmail = req.params.email;
    const { name, age, mark, email } = req.body;

    let students = readData();
    const index = students.findIndex(s => s.email.toLowerCase() === oldEmail.toLowerCase());
    if (index === -1) return res.json({ error: "Student not found" });

    if (!name || !age || !mark || !email) {
        return res.json({ error: "All fields (name, age, mark, email) are required" });
    }
    if (name.length < 3) return res.json({ error: "Name must be at least 3 letters" });
    if (isNaN(age)) return res.json({ error: "Age must be a number" });
    if (age < 17 || age > 30) return res.json({ error: "Age must be between 17 and 30" });
    if (isNaN(mark)) return res.json({ error: "Mark must be a number" });
    if (mark < 0 || mark > 100) return res.json({ error: "Mark must be between 0 and 100" });
    if (!/\S+@\S+\.\S+/.test(email)) return res.json({ error: "Invalid email format" });
    if (emailExists(email, oldEmail)) return res.json({ error: "Email already exists" });

    students[index] = { name, age, mark, email };
    writeData(students);

    res.json({ message: "Student updated successfully" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
