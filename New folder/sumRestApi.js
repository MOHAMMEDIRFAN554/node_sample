const http = require('http');
// const url = require('url');
const PORT = 4200
const server = http.createServer((req, res) => {

    const queryString = req.url.split('?')[1];     
    const parts = queryString.split('&');          
    const num1 = parseInt(parts[0].split('=')[1]);  
    const num2 = parseInt(parts[1].split('=')[1]);  
    const sum = num1 + num2;

    res.end(`Sum of ${num1} and ${num2} is ${sum}`);
})



server.listen(PORT, function (err) {
    if (err) {
        console.log("error", err)
    }
    else {
        console.log("server started successfully")

    }
})


