const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory users array for demo purposes
const users = [];

// Helper function to check if email exists
function emailExists(email) {
    return users.some(user => user.email === email);
}

app.post('/register', (req, res) => {
    const { name, email } = req.body;

    // Basic validation
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required.' });
    }

    // Check if email already exists
    if (emailExists(email)) {
        return res.status(409).json({ message: 'Email already exists.' });
    }

    // Add user to array
    users.push({ name, email });
    res.status(201).json({ message: 'User registered successfully.' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});