const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'products.json');

class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        Product.fetchAll(products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), err => {
                if (err) console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        fs.readFile(filePath, (err, fileContent) => {
            if (err) {
                return cb([]); // file doesn't exist
            }
            cb(JSON.parse(fileContent));
        });
    }
}

module.exports = Product;