

function welcome(req,res){
    res.send("Welcome to the central library \n1) Add user /addUser \n2) Add Book /addBook \n3) Book Transaction /bookTransaction")
}
function addUser(req,res){
    
}

module.exports = {
    welcome
}