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
    let name = req.query.name;
    let age = req.query.age;
    let mark = req.query.mark;

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
    let name = req.query.name;
    let i = users.findIndex(u => u.name === name);

    if (i === -1) {
        res.send("User does not exist: " + name);
    } else {
        users.splice(i, 1);
        res.send("Deleted user: " + name);
    }
});

app.put("/updateUser", (req, res) => {
    let oldName = req.query.name;
    let newName = req.query.newName;

    if (!oldName || !newName) {
        return res.send("Please provide both name and newName");
    }

    let i = users.findIndex(u => u.name === oldName);
    if (i === -1) {
        res.send("User not found: " + oldName);
    } else {
        users[i].name = newName;
        res.send(`Updated user ${oldName} to ${newName}`);
    }
});

app.delete("/deleteAll", (req, res) => {
    users.length = 0;
    res.send("All users deleted successfully");
});

app.listen(PORT, () => {
    console.log("Server started at", PORT);
});
