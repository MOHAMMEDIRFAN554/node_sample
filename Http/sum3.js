// to find the sum of three numbers 
//http://localhost:4200/?n3=12&n4=13&n1=10


const http = require('http')
const { sum } = require('./functions')
const PORT = 4200


const server = http.createServer((req,res)=>{
    const url = req.url.split("?")[1] 
    const str = url.split('&')
    let num1 = parseFloat(str[0].split("=")[1]);
    let num2 = parseFloat(str[1].split("=")[1]);
    let num3 = parseFloat(str[2].split("=")[1]);


    let sum = num1 + num2 + num3

    res.end(`The sum of ${num1} ${num2} ${num3} = ${sum}`)
})

server.listen(PORT, function(err){
    if(err){
        console.log("Error",err)
    }
    else{
        console.log("The server started successfully")
    }
})