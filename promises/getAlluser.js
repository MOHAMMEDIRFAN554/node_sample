const http = require('http');
const fs = require('fs').promises;

const PORT = 4300;
const ENCODING = 'utf-8';

const server = http.createServer((req, res) => {
    const url = req.url;



    //getAll
    if (url.includes('getAllUsers')) {
        fs.readFile('users.json', ENCODING).then(users => {
            res.end(users);
        }).catch(err => {
            res.end(JSON.stringify({ error: err.message }));
        });
    }


    //insert
    else if (url.includes('insertUser')) {
        let name = url.split('=')[1].split('&')[0];
        let id = parseInt(url.split('=')[2].split('&')[0]);
        let mark = parseInt(url.split('=')[3]);

        let data = { name, id, mark };

        fs.readFile('users.json', ENCODING).then(fileData => {
            let usersArr = [];

            usersArr = JSON.parse(fileData);

            usersArr.push(data);

            fs.writeFile('users.json', JSON.stringify(usersArr, null, 2));
        }).then(() => {
            res.end("User inserted successfully");
        }).catch(err => {
            res.end(JSON.stringify({ error: err.message }));
        });
    }

    else {
        res.end("Available routes:\n/getAllUsers\n/insertUser?name=NAME&id=ID&mark=MARK");
    }
});

server.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
