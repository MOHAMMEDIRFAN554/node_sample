const http = require('http');
const url = require('url');
const funnct = require('./functions').palindrome
const PORT = 4200
const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return;

    const query = url.parse(req.url, true).query;
    const num1 = parseInt(query.num1);
    const num2 = parseInt(query.num2);
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


