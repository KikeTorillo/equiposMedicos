const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'kike',
    password: 'root',
    database: 'equipos_medicos'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;

