//day2 task2
function insertName(array, name) {
    name = name.toUpperCase()
    if (array.indexOf(name) === -1) {
        array.push(name);
        console.log(`${name} is added to database.`);
    } else {
        console.log(`${name} is already exist in database.`);
    }
    console.log(array);
}
let names = ["ALICE", "BOB", "CHARLIE"];

insertName(names, "david");
insertName(names, "alice");
insertName(names, "maya");
insertName(names, "alice");
 
insertName(names, "bob");
insertName(names, "sofi");
insertName(names, "nivin");
