const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'atm';

let _db = null;

function getDB() {
  return new Promise((resolve, reject) => {
    if (_db) return resolve(_db);

    client.connect()
      .then(connection => {
        _db = connection.db(dbName);
        _db.collection('accounts').createIndex({ cardNumber: 1 }, { unique: true }).catch(() => {});
        resolve(_db);
      })
      .catch(reject);
  });
}

function findAccount(cardNumber) {
  return getDB().then(db =>
    db.collection('accounts').findOne({ cardNumber: String(cardNumber) })
  );
}

function createAccount(accountDoc) {
  return getDB().then(db =>
    db.collection('accounts').insertOne(accountDoc)
  );
}

function updateAccountByCard(cardNumber, fields) {
  return getDB().then(db =>
    db.collection('accounts').updateOne(
      { cardNumber: String(cardNumber) },
      { $set: fields }
    )
  );
}

function saveAccountDoc(accountDoc) {
  return getDB().then(db =>
    db.collection('accounts').replaceOne(
      { cardNumber: String(accountDoc.cardNumber) },
      accountDoc
    )
  );
}

module.exports = {
  ObjectId,
  getDB,
  findAccount,
  createAccount,
  updateAccountByCard,
  saveAccountDoc
};
