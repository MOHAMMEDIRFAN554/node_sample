// to reverse the string
//http://localhost:4200/?kldsmf=anoop


const http = require('http')
const PORT = 4200


const server = http.createServer((req,res)=>{
    console.log(req.url)
    const url = req.url.split("?")[1] 
    console.log("url =" ,url)
    const str = url.split('=')[1]
    console.log("str =" ,str)

    let rev = str.split("").reverse().join("")
    console.log("rev =" ,rev)



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