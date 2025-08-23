const http = require('http');
const fs = require('fs').promises;

const PORT = 4300;
const ENCODING = 'utf-8';

const server = http.createServer((req, res) => {
    const url = req.url;

    // get
    if (url.includes('getAllUsers')) {
        fs.readFile('users.json', ENCODING)
            .then(users => {
                res.end(users);
            })
            .catch(err => {
                res.end(JSON.stringify({ error: err.message }));
            });
    }

    // insrt
    else if (url.includes('insertUser')) {
        let name = url.split('=')[1].split('&')[0];
        let id = parseInt(url.split('=')[2].split('&')[0]);
        let mark = parseInt(url.split('=')[3]);

        if (!name?.trim()) {
            res.end("User name cannot be empty");
            return;
        }

        fs.readFile('users.json', ENCODING)
            .then(fileData => {
                let usersArr = JSON.parse(fileData);

                let exists = usersArr.some(user => user.name === name);
                if (exists) {
                    res.end("Error: User with same name already exists");
                    return Promise.reject();
                }

                usersArr.push({ name, id, mark });

                return fs.writeFile('users.json', JSON.stringify(usersArr, null, 2));
            })
            .then(() => {
                res.end("User inserted successfully");
            })
            .catch(err => {
                if (err) res.end(JSON.stringify({ error: err.message }));
            });
    }


    // dlt
    else if (url.includes('deleteUser')) {
        let name = url.split('=')[1];

        if (!name) {
            res.end("Error: Missing name parameter for deleteUser");
            return;
        }

        fs.readFile('users.json', ENCODING)
            .then(fileData => {
                let usersArr = JSON.parse(fileData);

                let index = usersArr.findIndex(user => user.name === name);
                if (index === -1) {
                    res.end("Error: User not found");
                    return Promise.reject();
                }

                usersArr.splice(index, 1);
                return fs.writeFile('users.json', JSON.stringify(usersArr, null, 2));
            })
            .then(() => {
                res.end(`User '${name}' deleted successfully`);
            })
            .catch(err => {
                if (err) res.end(JSON.stringify({ error: err.message }));
            });
    }

    // upt
    else if (url.includes('updateUser')) {
        let oldName = url.split('=')[1].split('&')[0];
        let newName = url.split('=')[2];

        if (!oldName || !newName) {
            res.end("Error: Missing oldName or newName parameter for updateUser");
            return;
        }

        fs.readFile('users.json', ENCODING)
            .then(fileData => {
                let usersArr = JSON.parse(fileData);

                let index = usersArr.findIndex(user => user.name === oldName);
                if (index === -1) {
                    res.end("Error: User not found");
                    return Promise.reject();
                }

                usersArr[index].name = newName;
                return fs.writeFile('users.json', JSON.stringify(usersArr, null, 2));
            })
            .then(() => {
                res.end(`User '${oldName}' updated to '${newName}' successfully`);
            })
            .catch(err => {
                if (err) res.end(JSON.stringify({ error: err.message }));
            });
    }

    // default 
    else {
        res.end("Available routes:\n/getAllUsers\n/insertUser?name=NAME&id=ID&mark=MARK\n/deleteUser?name=NAME\n/updateUser?oldname=OLDNAME&newname=NEWNAME");
    }
});

server.listen(PORT, (err) => {
    if (err) {
        console.log("error", err)
    }
    else {
        console.log(`Server started successfully on port ${PORT}`);
    }
});
