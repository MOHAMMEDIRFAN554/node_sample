const express = require('express');
let PORT = 3000

const app = express();
app.use(express.json())
let names = ["Shabeeb", "Sherona"];

app.get("/getAllNames", (req, res) => {
    res.json(names);
});
app.post("/insertName", (req, res) => {
    let name = req.query.name;
    if (!name) {
        return res.send("Please provide a name");
    }
    if(names.includes(name)){
        res.send("the name is already exist")
    }
    else{
    names.push(name);
    res.send("Insert success",name);}
});
app.delete("/deleteName", (req, res) => {
    let name = req.query.name;
    let i = names.indexOf(name);
    if (i == -1) {
        res.send("Name does not exist: " + name);
    } else {
        names.splice(i, 1);
        res.send("Deleted " + name);
    }
});
app.post("/insertNameBody", (req, res) => {
    let name = req.body.name;
    if (!name) {
        return res.send("Please provide a name in body");
    }
    names.push(name);
    res.send("Insert success (via body)");
});

app.listen(PORT, () => {
    console.log("Server Strarted at",PORT);
});