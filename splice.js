//day2 task4
function removeName(array, name) {
    name = name.toUpperCase()
    let index = array.indexOf(name);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`${name} was removed from database.`);
        console.log(array);
    }
    else {
        console.log(`${name} is not found in database.`)
    }
}
let names = ["ALICE", "BOB", "CHARLIE", "SOFI", "NIVIN", "ANNIE"];

removeName(names, "charlie");
removeName(names, "maya");
removeName(names, "bob");
removeName(names, "charlie");

