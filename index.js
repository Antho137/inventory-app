const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRoutes');
const booksRouter = require('./routes/booksRoutes');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/", booksRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})