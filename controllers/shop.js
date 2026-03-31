const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    res.render('shop/product-list', {
        prods: []
    });
};