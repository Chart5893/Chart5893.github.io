const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // local MongoDB URI
const dbName = 'companyDB';
let db;

async function connect() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();
  db = client.db(dbName);
  console.log('✅ Connected to MongoDB');
}

function getDb() {
  return db;
}

module.exports = { connect, getDb };
