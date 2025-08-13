const http = require('http')
const PORT = 4200

let users = ["john", "madhav", "ajith"]


const server = http.createServer((req, res) => {
    let url = req.url

    if (url.includes("getAllUser")) {
        res.end(`the users are = ${users}`)
    }
    else if (url.includes("insertUser")) {
        let str = url.split("=")[1]

        if (!str?.trim()) {
            res.end("User name cannot be empty");
        }

        else if (users.includes(str)) {
            res.end(`${str} is already in database`)
        } else {

            users.push(str)
            res.end(`${str} added successfully ,updated array = ${users}`)

        }
    }
    else if (url.includes("deleteUser")) {
        let str = url.split("=")[1]

        index = users.indexOf(str)


        if (index == -1) {
            res.end(`${str} is not found in database`)
        }
        else {
            users.splice(index, 1)
            res.end(`${str} is successfully deleted `)
        }

    }
    else {
        res.end(`invalid input please check getAllUser, insertUser, deleteUser`)
    }


})

server.listen(PORT, function (err) {
    if (err) {
        console.log("EROOR", err)
    }
    else {
        console.log("Server started successfully")
    }
})
