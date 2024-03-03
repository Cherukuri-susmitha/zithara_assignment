const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'customerss',
  password: 'Mypassword@987',
  port: 5432,
});

module.exports = pool;
