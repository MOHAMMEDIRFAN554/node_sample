const fs = require('fs').promises;
const http = require('http')
const PORT = 4200


const server = http.createServer((req, res)=>{

fs.readFile('kk.txt', 'utf-8')
    .then(data => {
        console.log('File contents:', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    })

    .finally(() => {
        console.log("Completed");
    });


})
server.listen(PORT, function(err){


    if(err){
        console.log("EROOR",err)
    }
    else{
        console.log("Server started successfully")
    }
})