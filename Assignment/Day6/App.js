const express = require('express');

const app = express();

const mainRoutes = require('./routes/contacts');

app.use(mainRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});


app.listen(3000);