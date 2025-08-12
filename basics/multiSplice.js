function removeNames(array, ...names) {
    for (let name of names) {
        let uName = name.toUpperCase();
        let index = array.indexOf(uName);

        if (index !== -1) {
            array.splice(index, 1);
            console.log(`${uName} was removed from database.`);
        } else {
            console.log(`${uName} is not found in database.`);
        }
    }
    console.log("Updated array:", array);
}
let names = ["ALICE", "BOB", "CHARLIE", "SOFI", "NIVIN", "ANNIE"];
removeNames(names, "charlie", "maya", "bob", "sofi");
