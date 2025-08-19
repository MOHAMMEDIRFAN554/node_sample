const express = require('express');
let PORT = 4000;

const app = express();
app.use(express.json());

let users = [
    { name: "raju", age: 18, mark: 45 },
    { name: "radha", age: 22, mark: 50 },
    { name: "dankini", age: 55, mark: 15 }
];

app.get("/getAllUsers", (req, res) => {
    res.json(users);
});

app.post("/insertUser", (req, res) => {
    let { name, age, mark } = req.body;

    if (!name || !age || !mark) {
        return res.send("Please provide name, age and mark");
    }

    let exists = users.find(u => u.name === name);
    if (exists) {
        return res.send("User already exists: " + name);
    }

    users.push({ name, age: parseInt(age), mark: parseInt(mark) });
    res.send("Insert success: " + name);
});

app.delete("/deleteUser", (req, res) => {
    let { name } = req.body;

    if (!name) {
        return res.send("Please provide a user name to delete");
    }

    let i = users.findIndex(u => u.name === name);
    if (i === -1) {
        res.send("User does not exist: " + name);
    } else {
        users.splice(i, 1);
        res.send("Deleted user: " + name);
    }
});

app.put("/updateUser", (req, res) => {
    let { name, newName, newAge, newMark } = req.body;

    if (!name) {
        return res.send("Please provide the current user name");
    }

    let i = users.findIndex(u => u.name === name);
    if (i === -1) {
        res.send("User not found: " + name);
    } else {
        if (newName) users[i].name = newName;
        if (newAge) users[i].age = parseInt(newAge);
        if (newMark) users[i].mark = parseInt(newMark);

        res.send(`Updated user ${name}`);
    }
});

app.delete("/deleteAll", (req, res) => {
    users.length = 0;
    res.send("All users deleted successfully");
});

app.listen(PORT, () => {
    console.log("Server started at", PORT);
});
