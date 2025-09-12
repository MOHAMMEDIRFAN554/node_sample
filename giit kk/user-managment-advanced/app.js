const fs = require('fs').promises;
const http = require("http");
const PORT = 7777;
const PART1_NAME = "part1.txt";
const PART2_NAME = "part2.txt";
const ENCODING = "utf8";

const server = http.createServer((req, res) => {
    let url = req.url;

    if(url.includes('readFile')) {
        // /readFile?fileName=abc.txt
        
        fs.readFile(url.split("=")[1], ENCODING).then(data=> {
            console.log("data", data);
            res.end(data)
        }).catch(err=> {
            res.end("Could not read file " + url.split("=")[1])
        })
    } else if(url.includes('writeFile')) {
        // /writeFile?fileName=kk.txt&content=Heloo

        let fileName = url.split("=")[1].split("&")[0];
        let content = url.split("=")[2];

        content = content.replaceAll("%20", " ")

        fs.appendFile(fileName, content).then(()=> {
            res.end("Successfully written "+ fileName)
        })

    } else if(url.includes('getAllUsers')) {
        fs.readFile("users.json", ENCODING).then(users => {
            res.end(users)
        })
    } else if(url.includes('insertUser')) {

        // insertUser?name=kk&id=6&mark=33

        let name = url.split("=")[1].split("&")[0];
        let id = parseInt(url.split("=")[2].split("&")[0]);
        let mark = parseInt(url.split("=")[3]);

        let data = {
            name,id,mark
        }

        


    } else {
        res.end("No such API")
    }
})



server.listen(PORT, (err) => {
  if (err) {
    console.log("some error", err);
  } else {
    console.log("server started....");
  }
});



// fs.readFile(PART1_NAME, ENCODING).then(data=> {
//     fs.readFile(PART2_NAME, ENCODING).then(data2=> {
//         fs.readFile(data + data2, ENCODING).then(result=> {
//             console.log("final result ", result)
//         })
//     })
// })




// fs.readFile("kk.txt", function(err, data) {
//     if(err) {
//         console.log("error ", err)
//     } else {
//         console.log("data ", data.toString())
//     }
// })

// fs.readFile("kk1.txt").then(data => {
//     console.log("data ", data.toString());
// }).catch(err=> {
//     console.log("error ", err);
// })

// fs.appendFile("abc.txt", "\nTintu").then(data => {
//     console.log("File written success", data)
// }).catch(err=> {
//     console.log("cound not write")
// }).finally(()=> {
//     console.log("DONE")
// })