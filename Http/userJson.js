const http = require('http');
const PORT = 3000;


let users = [
    { name: "john", 
    age: 20, 
    mark: 80 },
    { name: "alice", age: 19, mark: 90 },
    { name: "bob", age: 21, mark: 85 }
];

const server = http.createServer((req, res) => {
    let url = req.url;

    if (url.includes("getAllUser")) {
        res.end(`Here's the list of users: ${JSON.stringify(users)}`);
    }

    else if (url.includes("insertUser")) {
        let str = url.split("?")[1];
        let parts = str.split("&");

        let name = parts[0].split("=")[1];
        let age = parseInt(parts[1].split("=")[1]);
        let mark = parseInt(parts[2].split("=")[1]);

        
        if (users.some(user => user.name === name)) {
            res.end(`The name ${name} already exists`);
        } else {
            users.push({ name, age, mark });
            res.end(`${name} is successfully added to database. Updated database = ${JSON.stringify(users)}`);
        }
    }

    else if (url.includes("deleteUser")) {
        let str = url.split("?")[1];
        let name = str.split("=")[1];

        let index = users.findIndex(user => user.name === name);
        if (index === -1) {
            res.end(`${name} is not in the database`);
        } else {
            users.splice(index, 1);
            res.end(`${name} successfully removed. Updated database = ${JSON.stringify(users)}`);
        }
    }

    else {
        res.end("Invalid endpoint. Try /getAllUser, /insertUser, or /deleteUser");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
