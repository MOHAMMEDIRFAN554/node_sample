const http = require("http");
const PORT = 4567;

let users = [{"id":1,"name":"Keenan","mark":28},
{"id":2,"name":"Noell","mark":29},
{"id":3,"name":"Rena","mark":48},
{"id":4,"name":"Gene","mark":44},
{"id":5,"name":"Temple","mark":6},
{"id":6,"name":"Holly","mark":15},
{"id":7,"name":"Beltran","mark":1},
{"id":8,"name":"Wendy","mark":26},
{"id":9,"name":"Reynolds","mark":35},
{"id":10,"name":"Allx","mark":47},
{"id":11,"name":"Christophe","mark":0},
{"id":12,"name":"Hadley","mark":0},
{"id":13,"name":"Hamel","mark":23},
{"id":14,"name":"Kaycee","mark":15},
{"id":15,"name":"Editha","mark":13},
{"id":16,"name":"Odilia","mark":0},
{"id":17,"name":"Andromache","mark":39},
{"id":18,"name":"Inga","mark":2},
{"id":19,"name":"Rudolph","mark":44},
{"id":20,"name":"Paulo","mark":9},
{"id":21,"name":"Britta","mark":49},
{"id":22,"name":"Jobey","mark":36},
{"id":23,"name":"Jeramey","mark":1},
{"id":24,"name":"Idette","mark":21},
{"id":25,"name":"Arabelle","mark":25},
{"id":26,"name":"Andriana","mark":15},
{"id":27,"name":"Ilysa","mark":25},
{"id":28,"name":"Darby","mark":50},
{"id":29,"name":"Eamon","mark":14},
{"id":30,"name":"Kala","mark":36},
{"id":31,"name":"Davie","mark":11},
{"id":32,"name":"Jorie","mark":20},
{"id":33,"name":"Harcourt","mark":18},
{"id":34,"name":"May","mark":38},
{"id":35,"name":"Aubrey","mark":22},
{"id":36,"name":"Meir","mark":7},
{"id":37,"name":"Flint","mark":20},
{"id":38,"name":"Jessi","mark":28},
{"id":39,"name":"Maurine","mark":25},
{"id":40,"name":"Jarred","mark":10},
{"id":41,"name":"Brander","mark":24},
{"id":42,"name":"Jaquelin","mark":31},
{"id":43,"name":"Katrinka","mark":43},
{"id":44,"name":"Ursala","mark":5},
{"id":45,"name":"Sampson","mark":3},
{"id":46,"name":"Isaac","mark":3},
{"id":47,"name":"Ealasaid","mark":14},
{"id":48,"name":"Lita","mark":7},
{"id":49,"name":"Ansley","mark":28},
{"id":50,"name":"Mariejeanne","mark":34}]

const server = http.createServer((req, res) => {
  let url = req.url;

  // insertUser?newName = bipin & mark = 89

  if (url.includes("getUser")) {
    res.end(JSON.stringify(users));
  } else if (url.includes("insertUser")) {
    let mark = url.split("=")[2];
    let name = url.split("=")[1].split("&")[0];

    let sample = {
      name: name,
      mark: mark,
    };

    users.push(sample);

    res.end("Successfully inserted ");
  } else if (url.includes("deleteUser")) {
    // add delete code
    let url = req.url;

    let nameToBeDeleted = url.split("=")[1];

    let index = -1;
    for (let i = 0; i < users.length; i++) {
      if (nameToBeDeleted == users[i].name) {
        index = i;
      }
    }

    if (index == -1) {
      res.end("No such user " + nameToBeDeleted);
    } else {
      users.splice(index, 1);
      res.end("Delete success");
    }
  } else if (url.includes("editUser")) {
    let url = req.url;
    let name = url.split("=")[3];
    let newPlace = url.split("=")[2].split("&")[0];
    let mark = url.split("=")[1].split("&")[0];
    let index = getNamePosition(name);
    if (index == -1) {
      res.end("No such user exist");
    } else {
      users[index].place = newPlace;
      users[index].mark = mark;
      res.end("User details updated");
    }
  } else if (url.includes("getPaginatedUser")) {
    let url = req.url;
    let pageNumber = parseInt(url.split("=")[1]);

    res.end(JSON.stringify(users.slice((pageNumber - 1) * 5 , pageNumber * 5)));
    
  } else {
    res.end("No such API");
  }
});

function getNamePosition(name) {
  let index = -1;
  for (let i = 0; i < users.length; i++) {
    if (name == users[i].name) {
      index = i;
    }
  }
  return index;
}

server.listen(PORT, (err) => {
  if (err) {
    console.log("some error", err);
  } else {
    console.log("server started....");
  }
});
