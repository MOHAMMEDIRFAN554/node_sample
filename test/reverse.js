const http = require('http')
const PORT = 4200


const server = http.createServer((req, res)=>{
    let url = req.url
    let str= url.split("=")[1]

    let rev = str.split("").reverse().join("")

   
    res.end(`the reverse of ${str} is ${rev}`)



})

server.listen(PORT, function(err){


    if(err){
        console.log("EROOR",err)
    }
    else{
        console.log("Server started successfully")
    }
})
