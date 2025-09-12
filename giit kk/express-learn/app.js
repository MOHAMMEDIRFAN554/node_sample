const express = require("express");
const app = express();
app.use(express.json());

let users = [];

// let users = [{
//     id: 1,
//     name: "kk",
//     age: 22,
//     mark: 55,
//     email: "kk@gmail.com"
// }, {
//     id: 3,
//     name: "sherona",
//     age: 23,
//     mark: 65,
//     email: "sherona@gmail.com"
// }];

app.get("/getAllUsers", (req, res) => {
  res.json(users);
});

app.get("/getUserById", (req, res) => {
  let id = parseInt(req.query.id);
  let userIndex = users.map((user) => user.id).indexOf(id);
  if (userIndex == -1) {
    res.send("No such user " + id);
  } else {
    res.json(users[userIndex]);
  }
});

function getNextId() {
  let lastID = 0;
  if (users.length > 0) {
    lastID = users[users.length - 1].id;
  }
  lastID = lastID + 1;
  return lastID;
}

function isEmailDuplicate(email) {
  let emailDuplicateFound = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      emailDuplicateFound = true;
    }
  }
  return emailDuplicateFound;
}

function validateEmail(email) {
  var emailRegExpression = /\S+@\S+\.\S+/;
  return emailRegExpression.test(email);
}

app.post("/insertUser", (req, res) => {
  let data = req.body;
  if (data.hasOwnProperty("name")) {
    if (data.hasOwnProperty("age")) {
      if (data.hasOwnProperty("mark")) {
        if (data.hasOwnProperty("email")) {
          if (isEmailDuplicate(data.email)) {
            res.send("Email already exist " + data.email);
          } else {
            if (data.name.length >= 3) {
              if (Number.isFinite(data.age)) {
                if (Number.isFinite(data.mark)) {
                  if (data.age >= 17 && data.age <= 30) {
                    if (data.mark >= 0 && data.mark <= 100) {
                      if (validateEmail(data.email)) {
                        // Success
                        let user = {
                            name: data.name,
                            age: data.age,
                            mark: data.mark,
                            email: data.email,
                            id: getNextId()
                        }
                        users.push(user);
                        res.send("insert success " + data.name);
                        // Success
                      } else {
                        res.send("Please enter proper email");
                      }
                    } else {
                      res.send("Mark must be within range 0 to 100");
                    }
                  } else {
                    res.send("Age must be within range 17 to 30");
                  }
                } else {
                  res.send("Mark should be of numeric value");
                }
              } else {
                res.send("Age must be of numeric value");
              }
            } else {
              res.send("name must be atleast 3 letters");
            }
          }
        } else {
          res.send("Email is mandatory");
        }
      } else {
        res.send("Mark is mandatory");
      }
    } else {
      res.send("Age is mandatory");
    }
  } else {
    res.send("Name is mandatory");
  }
});

app.delete("/deleteUser", (req, res) => {
  let data = req.body;
  let id = data.id;
  let indexToBeDeleted = users.map((user) => user.id).indexOf(id);
  if (indexToBeDeleted == -1) {
    res.send("No user with id " + id);
  } else {
    let usersDeleted = users.splice(indexToBeDeleted, 1);
    res.send("deleted " + usersDeleted[0].name);
  }
});

app.listen(3000);
