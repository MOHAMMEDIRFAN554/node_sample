const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

let users = ["John", "Jane", "Mike"];

// file operations
function readFilesAndWrite() {
    fs.readFile('http.txt', 'utf8', (err, data1) => {
        if (err) return console.error("Error reading file1:", err);

        console.log("Content of file1:", data1);

        fs.readFile(data1.trim(), 'utf8', (err, data2) => {
            if (err) return console.error("Error reading second file:", err);

            console.log("Content of second file:", data2);

            const folderPath = path.join(__dirname, 'outputFolder');
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }

            fs.writeFile(path.join(folderPath, 'result.txt'), data2, (err) => {
                if (err) return console.error("Error writing file:", err);
                console.log("Data written successfully to result.txt");
            });
        });
    });
}


readFilesAndWrite();

// http 
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.setHeader('Content-Type', 'application/json');

    if (pathname === '/getAllUsers') {
        res.end(JSON.stringify({ users }));
    }
    else if (pathname === '/insertUser') {
        const name = query.name ? query.name.trim() : "";
        if (!name) {
            res.end(JSON.stringify({ error: "Name cannot be empty" }));
        } else if (users.includes(name)) {
            res.end(JSON.stringify({ error: "User already exists" }));
        } else {
            users.push(name);
            res.end(JSON.stringify({ message: "User added", users }));
        }
    }
    else if (pathname === '/deleteUser') {
        const name = query.name ? query.name.trim() : "";
        if (!name) {
            res.end(JSON.stringify({ error: "Name cannot be empty" }));
        } else if (!users.includes(name)) {
            res.end(JSON.stringify({ error: "User not found" }));
        } else {
            users = users.filter(u => u !== name);
            res.end(JSON.stringify({ message: "User deleted", users }));
        }
    }
    else {
        res.end(JSON.stringify({ error: "Invalid endpoint" }));
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
