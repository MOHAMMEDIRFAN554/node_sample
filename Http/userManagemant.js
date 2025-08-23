const http = require('http');
const PORT = 3000;


let users = ["john", "alice", "bob"];

const server = http.createServer((req, res) => {
    let url = req.url
    if (url.includes("getAllUser")) {
        res.end(`heres the list of users ${users}`)
    }
    else if (url.includes("insertUser")) {
        console.log(url)
        str = url.split("?")[1]
        console.log(str)

        nam = str.split("=")[1]
        console.log(nam)


        if (users.includes(nam)) {
            res.end(`the name ${nam} is already exists`)

        } else {
            users.push(nam)
            res.end(`${nam} is successfully added to database , updated database = ${users}`)
        }



    } else if (url.includes("deleteUser")) {
        str = url.split("?")[1]
        nam = str.split("=")[1]
        index = users.indexOf(nam)
        if(index == -1){
            res.end(`${nam} is not exist in database`)
        }
        else{
        users.splice(index, 1)
        res.end(`${nam} successfully removed, updated database = ${users}`)
        }

        console.log("geting data", index)

    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
