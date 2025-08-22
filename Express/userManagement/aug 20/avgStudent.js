const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [];

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post('/register', (req, res) => {
    const { name, age, mark, email } = req.body;
    const keys = Object.keys(req.body);

    let result = { status: "approve", message: "User registered successfully." };

    if (keys.length !== 4) {
        result = { status: "reject", message: "No extra fields allowed and all fields must be present." };
    }
    else if (!name || name.length < 3) {
        result = { status: "reject", message: "Name must be at least 3 letters." };
    }
    else if (typeof age !== "number" || age < 17 || age > 30) {
        result = { status: "reject", message: "Age must be between 17 and 30." };
    }
    else if (typeof mark !== "number" || mark < 0 || mark > 100) {
        result = { status: "reject", message: "Mark must be between 0 and 100." };
    }
    else if (!validEmail(email)) {
        result = { status: "reject", message: "Invalid email format." };
    }
    else if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        result = { status: "reject", message: "Email already exists." };
    }

    if (result.status === "approve") {
        users.push({ name, age, mark, email });
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});

app.get('/average', (req, res) => {
    let result = { status: "approve", message: "" };

    if (users.length === 0) {
        result = { status: "reject", message: "No students found." };
    } else {
        const total = users.reduce((sum, u) => sum + u.mark, 0);
        const avg = total / users.length;
        result.message = `Average mark of students: ${avg.toFixed(2)}`;
    }

    res.json(result);
});

app.listen(3000, () => console.log("Server running on port 3000"));
