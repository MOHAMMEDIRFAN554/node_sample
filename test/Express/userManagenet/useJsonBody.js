const express = require('express')
const app = express()
const PORT = 4000
app.use(express.json());

let users = [
    { name: "mayavi", age: 30, mark: 50 },
    { name: "luttappi", age: 25, mark: 48 },
    { name: "raju", age: 20, mark: 40 }

]

app.get('/getAllUsers', (req, res) => {
    res.send(JSON.stringify(users))

})

app.post('/insertUser', (req, res) => {
    let name = req.body.name
    let age = req.body.age
    let mark = req.body.mark
    if (!name) {
        res.send(`invalid input, please provide a valid name`)
    }
    else if (!age) {
        res.send(`invalid input, please provide a valid age`)
    }
    else if (!mark) {
        res.send(`invalid input, please provide a valid mark`)
    }
    let exist = users.find(str => str.name == name)
    if (exist) {
        res.send(`the user is already exists in database`)
    } else {
        users.push({ name, age, mark })
        res.send(`insert successfully ${name}  \n updated = ${JSON.stringify(users)}`)
    }
})

app.delete('/deleteUser', (req, res) => {
    let name = req.body.name
    if (!name) {
        res.send(`invalid input, please provide a valid name`)
        return
    }
    let index = users.findIndex(str => str.name == name)
    if (index == -1) {
        res.send(`user not found ${name}`)
    }
    else {
        users.splice(index, 1)
        res.send(`${name} user deleted successfully`)
    }
})
app.put('/updateUser', (req, res) => {
    let name = req.body.name;
    let newName = req.body.new
    let index = users.findIndex(str => str.name == name)
    if (!name) {
        res.send(`invalid input, please provide a valid name to change`)
    }
    else if (!newName) {
        res.send(`invalid input, please provide a valid name to update`)
    }
    if (index == -1) {
        res.send(`${name} is not found in database`)
    } else {
        users[index].name = newName
        res.send(`updated success from ${name} to ${newName}`)
    }
})
app.delete('/deleteAll', (req, res) => {
    users.length = 0
    res.send(`database cleared successfully`)
})
app.delete('/deleteArray', (req, res) => {
    let arr = req.body.arr
    for (let name of arr) {
        if (!name) {
            res.send(`invalid input, please provide a valid name \n`)
            return
        }
        let index = users.findIndex(str => str.name == name)
        if (index == -1) {
            res.write(`user not found ${name} \n`)
        }
        else {
            users.splice(index, 1)
            res.write(  `${name} user deleted successfully \n`)
        }
    }
    res.end()

})
app.get('/check',(req,res)=>{
    let name = req.body.name
    let index = users.findIndex(str => str.name == name)
        if (index == -1) {
            res.send(` ${name} not found \n`)
        }
        else {
            res.send(  `${name} found at ${index}`)
        }

})


app.listen(PORT, (err) => {
    if (err) {
        console.log("Error found", err)
    }
    else {
        console.log("server started successfully")
    }
})