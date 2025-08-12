// sample progmram to inser multiple names at a time
// sample instertion = http://localhost:3000/?n1=john&n2=smith&n3=arjun&n4=Bob&kldsmf=anoop

const http = require('http');
const PORT = 3000;
const server = http.createServer(function (req, res) {
    const url = req.url
    let str = url.split('?')[1]
    let data = str.split('&')
    let name = []

    for (n of data) {
        let d = n.split('=')[1]
        if(name.includes[n]){
            res.write(`The name ${n} is already exists`)
        }else{
            name.push(d)
        }
    }
    res.write("final array =" + name)
    res.end();
});

server.listen(PORT, function (err) {
    if (err) {
        console.log("error ", err);
    } else {
        console.log(`Server started successfully at http://localhost:${PORT}/?n1=john&n2=smith&n3=arjun&n4=Bob&kldsmf=anoop`);
    }
});
