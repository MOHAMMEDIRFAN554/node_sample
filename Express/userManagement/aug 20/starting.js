const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [];

function emailExists(email) {
    return users.some(user => user.email.toLowerCase() === email.toLowerCase());
}

app.post('/register', (req, res) => {
    const { name, age, mark, email } = req.body;

    if (!name || !age || !mark || !email) {
        res.status(400).json({ message: 'All fields (name, age, mark, email) are required.' });
    } else if (name.length < 3) {
        res.status(400).json({ message: 'Name must be at least 3 characters.' });
    } else if (isNaN(age)) {
        res.status(400).json({ message: 'Age must be a number.' });
    } else if (age < 17 || age > 30) {
        res.status(400).json({ message: 'Age must be between 17 and 30.' });
    } else if (isNaN(mark)) {
        res.status(400).json({ message: 'Mark must be a number.' });
    } else if (mark < 0 || mark > 100) {
        res.status(400).json({ message: 'Mark must be between 0 and 100.' });
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        res.status(400).json({ message: 'Invalid email format.' });
    } else if (emailExists(email)) {
        res.status(409).json({ message: 'Email already exists.' });
    } else if (Object.keys(req.body).length > 4) {
        res.status(400).json({ message: 'Only name, age, mark, and email are allowed.' });
    } else {
        users.push({ name, age, mark, email });
        res.status(201).json({ message: 'User registered successfully.' });
    }
});

app.get('/users', (req, res) => {
    const { startsWith } = req.query;

    if (!startsWith) {
        res.status(400).json({ message: 'Query parameter "startsWith" is required.' });
    } else {
        const letter = startsWith.toLowerCase();
        const filtered = users.filter(user => user.name[0].toLowerCase() === letter);

        if (filtered.length === 0) {
            res.status(404).json({ message: `No users found starting with '${startsWith}'.` });
        } else {
            res.json(filtered);
        }
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
