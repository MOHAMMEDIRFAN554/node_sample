const http = require('http')
const PORT = 4200

let users = ["john","madhav","ajith"]


const server = http.createServer((req, res)=>{
    let url = req.url

    if(url.includes("getAllUser")){
        res.end(`list of users = ${users}`)
        
    }
    else if(url.includes("insertUser")){
        let name = url.split("=")[1]
        
        if(users.includes(name)){
            res.end(`the ${name} is already exists`)
        }
        else{
            users.push(name)
            res.end(`the ${name} is added to database`)
        }
    }



    



})

server.listen(PORT, function(err){
    if(err){
        console.log("EROOR",err)
    }
    else{
        console.log("Server started successfully")
    }
})
