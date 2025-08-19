const express = require('express');
let PORT = 4000;

const app = express();
app.use(express.json());

let users = ["raju ", "radha", "mayavi", "luttappi"];

app.get("/getAllUsers", (req, res) => {
    res.json(users);
});

app.post("/insertUser", (req, res) => {
    let name = req.query.name;
    if (!name) {
        return res.send("Please provide a user name");
    }
    if (users.includes(name)) {
        res.send("User already exists: " + name);
    } else {
        users.push(name);
        res.send("Insert success: " + name);
    }
});

app.delete("/deleteUser", (req, res) => {
    let name = req.query.name;
    let i = users.indexOf(name);
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

    let i = users.indexOf(oldName);
    if (i === -1) {
        res.send("User not found: " + oldName);
    } else {
        users[i] = newName;
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
