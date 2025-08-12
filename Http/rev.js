// to reverse the string
//http://localhost:4200/?kldsmf=anoop


const http = require('http')
const PORT = 4200


const server = http.createServer((req,res)=>{
    const url = req.url.split("?")[1] 
    const str = url.split('=')[1]
    let rev = str.split("").reverse().join("")


    res.end(`the reverse of ${str} is ${rev}`)
})

server.listen(PORT, function(err){
    if(err){
        console.log("Error",err)
    }
    else{
        console.log("The server started successfully")
    }
})