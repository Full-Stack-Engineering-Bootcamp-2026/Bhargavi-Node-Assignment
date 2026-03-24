const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Welcome to my Node.js application!</h1>');
});

router.get('/about', (req, res, next) => {
    res.send('<h2>I am learning Node.js.</h2>');
});

router.get('/contact', (req, res, next) => {
    res.send('<h3>Name: Bhargavi Thorat <br> Batch:Node</h3>');
});

module.exports = router;