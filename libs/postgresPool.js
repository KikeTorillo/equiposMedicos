const { Pool } = require('pg');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

/*YA NO ES NECESARIO HACERLO ASI POR QUE CON LAS VARIABLES DE ENTORNO SE GENEREA UNA URL DE CONEXION
  const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'kike',
  password: 'root',
  database: 'equipos_medicos'
}); */

const pool = new Pool({ connectionString: URI});

module.exports = pool;

