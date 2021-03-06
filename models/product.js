const uuid = require('uuid');
const fs = require('fs');
const path  = require('path'); 

class Product {
    constructor (title, price, img) {
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = uuid.v4();
    }

    toJSON() {
        return {
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        };
    }

    async save() {
        const products = await Product.getAll();
        products.push(this.toJSON());

        return new Promise((resolve, reject) => {

            fs.writeFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                JSON.stringify(products),
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );

        });
    }

    static getAll() {
        return new Promise((resolve, reject) => {

            fs.readFile(
                path.join(__dirname, '..', 'data' ,'products.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(content));
                    }
    
    
                }
            );

        });
    }

    static async getById(id) {
        const products =  await Product.getAll();
        console.log(id);
        return products.find(c => c.id === id);

    }

    
}

module.exports = Product;