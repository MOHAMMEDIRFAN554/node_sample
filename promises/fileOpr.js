const fs = require('fs').promises;
const http = require('http');
const PORT = 4200;

const server = http.createServer((req, res) => {
    const originalFile = 'test.txt';
    const renamedFile = 'newFile.txt';
    const registryFile = 'reg.txt';




    if (req.url.includes("createFile")) {
        fs.writeFile(originalFile, 'Hello, this is the initial content.\n')
            .then(() => res.end('File created and written.\n'))
            .catch(err => res.end(`Error: ${err}`));
    }

    else if (req.url.includes("appendFile")) {
        fs.appendFile(originalFile, 'This is appended content.\n')
            .then(() => res.end('Content appended.\n'))
            .catch(err => res.end(`Error: ${err}`));
    }

    else if (req.url.includes("readFile")) {
        fs.readFile(originalFile, 'utf8')
            .then(data => res.end(`File contents:\n${data}`))
            .catch(err => res.end(`Error: ${err}`));
    }

    else if (req.url.includes("renameFile")) {
        fs.rename(originalFile, renamedFile)
            .then(() => res.end(`File renamed to ${renamedFile}\n`))
            .catch(err => res.end(`Error: ${err}`));
    }


    else if (req.url.includes("storeFileName")) {
        fs.writeFile(registryFile, renamedFile)
            .then(() => res.end('File name stored in reg.txt\n'))
            .catch(err => res.end(`Error: ${err}`));
    }


    else if (req.url.includes("readFromRegistry")) {
        fs.readFile(registryFile, 'utf8')
            .then(fileName => {
                return fs.readFile(fileName.trim(), 'utf8')
                    .then(content => res.end(`Content of ${fileName}:\n${content}`));
            })
            .catch(err => res.end(`Error: ${err}`));
    }

    else if (req.url.includes("deleteFile")) {
        fs.unlink(renamedFile)
            .then(() => res.end(`${renamedFile} deleted.`))
            .catch(err => res.end(`Error: ${err}`));
    }

    else if (req.url.includes("deleteRegistry")) {
        fs.unlink(registryFile)
            .then(() => res.end(`${registryFile} deleted.`))
            .catch(err => res.end(`Error: ${err}`));
    }


    else {
        res.end("Available paths:\n/createFile\n/appendFile\n/readFile\n/renameFile\n/storeFileName\n/readFromRegistry\n/deleteFile\n/deleteRegistry");
    }
});

server.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
