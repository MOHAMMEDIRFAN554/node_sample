
const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return 
    };
    res.end("Hello from Node.js HTTP server!");
});

server.listen(PORT, function (err) {
    if (err) {
        console.log("error", err)
    }
    else {
        console.log("server started successfully")
    }
})
