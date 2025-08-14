

const fs = require('fs').promises

const FILE1= "file1.txt"
const FILE2= "file2.txt"
const ENCODING= "utf8"

fs.readFile(FILE1,ENCODING).then(data1 =>{
    fs.readFile(FILE2,ENCODING).then(data2 =>{
        fs.readFile(data1+data2,ENCODING).then(result=>{
            console.log(result)
        })
    })
})