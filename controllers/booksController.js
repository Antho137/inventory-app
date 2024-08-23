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
  category VARCHAR(50) NOT NULL
  );
`;

pool.query(sql_create, [], (err, result) => {
  if (err) {
      return console.error(err.message);
  }
  console.log("Successful creation of the 'Books' table");
});

const getBooks = (req, res) => {
    const sql = "SELECT * FROM books ORDER BY title"
    pool.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("books", { model: result.rows });
    });
};

// GET /create
const getCreateBook = (req, res) => {
    res.render("create", { model: {} });
};
  
// POST /create
const postCreateBook = (req, res) => {
    const sql = "INSERT INTO books (title, author, price, category) VALUES ($1, $2, $3, $4)";
    const book = [req.body.title, req.body.author, req.body.price, req.body.category];
    pool.query(sql, book, (err, result) => {
      // if (err) ...
      res.redirect("/books");
    });
};

// GET /edit/5
const getEditBook = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM books WHERE id = $1";
    pool.query(sql, [id], (err, result) => {
      // if (err) ...
      res.render("edit", { model: result.rows[0] });
    });
};

// POST /edit/5
const postEditBook = (req, res) => {
    const id = req.params.id;
    const book = [req.body.title, req.body.author, req.body.price, req.body.category, id];
    const sql = "UPDATE books SET title = $1, author = $2, price = $3, category = $4 WHERE (id = $5)";
    pool.query(sql, book, (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.redirect("/books");
    });
};

// GET /delete/
const getDeleteBook = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM books WHERE id = $1";
    pool.query(sql, [id], (err, result) => {
      // if (err) ...
      res.render("delete", { model: result.rows[0] });
    });
};

// POST /delete/
const postDeleteBook = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM books WHERE id = $1";
    pool.query(sql, [id], (err, result) => {
      // if (err) ...
      res.redirect("/books");
    });
};

const getCategories = (req, res) => {
    res.render("categories");
};

const getWebCategory = (req, res) => {
    const sql = "SELECT * FROM books";
    pool.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("webCategory", { model: result.rows });
    });
};

const getDatabaseCategory = (req, res) => {
    const sql = "SELECT * FROM books";
    pool.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("databaseCategory", { model: result.rows });
    });
};

const getMisCategory = (req, res) => {
    const sql = "SELECT * FROM books";
    pool.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("misCategory", { model: result.rows });
    });
};

const getCompscCategory = (req, res) => {
    const sql = "SELECT * FROM books";
    pool.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("compscCategory", { model: result.rows });
    });
};

const getProgCategory = (req, res) => {
    const sql = "SELECT * FROM books";
    pool.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("progCategory", { model: result.rows });
    });
};

module.exports = { getBooks, getCreateBook, postCreateBook, getEditBook, postEditBook, getDeleteBook, postDeleteBook, getCategories, getCompscCategory, getDatabaseCategory, getMisCategory, getProgCategory, getWebCategory };