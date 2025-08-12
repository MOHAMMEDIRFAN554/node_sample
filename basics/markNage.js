function insertPerson(arr, name, age, mark) {
    name = name.toUpperCase();

    if (age < 18 || age > 30) {
        console.log(`Invalid age for ${name}`);
        return;
    }

    if (mark < 0 || mark > 50) {
        console.log(`Invalid mark for ${name}`);
        return;
    }

    for (let person of arr) {
        if (person.name === name) {
            console.log(`${name} already exists in the database.`);
            return;
        }
    }

    arr.push({ name: name, age: age, mark: mark });
    console.log(`${name} added to the database.`);
    console.log( arr);
}

function removeNames(arr, ...names) {
    for (let n of names) {
        let name = n.toUpperCase();
        let index = arr.findIndex(person => person.name === name);
        if (index !== -1) {
            arr.splice(index, 1);
            console.log(`${name} removed from the database.`);
             console.log( arr);
        } else {
            console.log(`${name} not found in the database.`);
        }
    }

   
}
let people = [];

insertPerson(people, "alice", 22, 45);
insertPerson(people, "Bob", 17, 30);      
insertPerson(people, "Charlie", 25, 51);  
insertPerson(people, "Sofi", 19, 33);
insertPerson(people, "alice", 23, 40);    
insertPerson(people, "nivin", 19, 43);
insertPerson(people, "sofi", 22, 45);
insertPerson(people, "sham", 25, 45);
insertPerson(people, "manoj", 20, 40);
insertPerson(people, "ram", 22, 80);
removeNames(people, "sofi", "maya");
