
const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return 'https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png';
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
