//user management using name {array}


const express = require('express');

const PORT = 4000;
const app = express()

let users = ['mayavi', "raju", "radha"]

app.get('/getAllUsers', (req, res) => {
    res.send(`users are ${users}`)
})
app.post('/insertUser', (req, res) => {
    let name = req.query.name

    if (!name) {
        res.send("invalid input, please enter a valid name")
    }
    else if (users.includes(name)) {
        res.send(`the name ${name} is already exist in database`)
    }
    else {
        users.push(name)
        res.send(`${name} is successfully inserted to database \n updates users = ${users}`)
    }
})

app.delete('/deleteUser', (req, res) => {
    let name = req.query.name

    let index = users.indexOf(name)
    if(!name){
        res.send(`invalid input , please correct the name`)
    }

    else if (index == -1) {
        res.send(`the user ${name} is not found in database`)
    }
    else {
        users.splice(index, 1);
        res.send(`the ${name} deleted successfully \n updated users = ${users}`)

    }

})
app.put('/updateUser',(req,res)=>{
    let name = req.query.name
    let newName = req.query.new
    let index = users.indexOf(name)

    if(!name){
        res.send(`invalid input , please enter the name to change`)
    }
    else if(!newName){
        res.send(`invalid input , please enter the name to update`)
    }
    else if(index == -1){
        res.send(`${name} is not found in databse`)
    }
    else{
        users[index] = newName
        res.send(`${name} is successfully changed to ${newName} \n updated users=${users}`)
    }
})

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error Found", err)
    }
    else {
        console.log("Server started successfully at port", PORT)
    }
})