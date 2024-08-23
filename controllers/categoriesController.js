const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'inventory',
    password: 'A923@post#',
    port: 5432,
});

const sql_create = `CREATE TABLE IF NOT EXISTS Books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2),
    category VARCHAR(50) NOT NULL);
`;

pool.query(sql_create, [], (err, result) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful creation of the 'Books' table");
});