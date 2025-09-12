const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); 

const dbName = "schoolDB";

async function connectDB() {
    try {
        await client.connect();
        console.log(" Connected to MongoDB");
        return client.db(dbName);
    } catch (err) {
        console.error("DB Connection Failed:", err);
        throw err;
    }
}

module.exports = connectDB;
