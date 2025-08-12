// to find square
//http://localhost:4200/?n1=7

const http = require('http')
const PORT = 4200


const server = http.createServer((req,res)=>{
    const url = req.url.split("?")[1] 
    const n = url.split('=')[1]

    let sqr = n * n
    
    res.end(`The square of the number ${n} = ${sqr} `)
})

server.listen(PORT, function(err){
    if(err){
        console.log("Error",err)
    }
    else{
        console.log("The server started successfully")
    }
})