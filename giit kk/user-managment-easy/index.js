const http = require('http');

console.log("started user management...")

let names = ["kk", "ashwin"];



const server = http.createServer(function (req, res) {
  let url = req.url;

  if(url.includes('insert')) {
    
    let name = url.split("=")[1];
    if(names.includes(name)) {
        res.end("name already exist");
    } else {
    names.push(name)
    res.end("Inserted "+ name)
    }
    

  } else if(url.includes('getAllNames')) {
    // send all student names
    res.end(names.toString())
  } else if(url.includes('deleteName')) {
    let name = url.split("=")[1];
    let index = names.indexOf(name);
    if(index == -1) {
        res.end("Dont exist " + name)
    } else {
        names.splice(index, 1)
        res.end("Deleted "+ name)
    }
  }
  else {
    // ariyilla 
    res.end("vere entho logic" + req.url)
  }
  
});

server.listen(7654, function () {
  console.log(`Server running`);
});