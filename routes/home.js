const {Router} = require('express');
const Product = require('../models/product');
const router = Router();

router.get('/', async (req, res) => {

    const products = await Product.getAll();

    res.render('home', {
        title: 'Главная страница',
        isHome: true,
        products
    });
});

/* router.get('/catalog', async (req, res) => {
    const products = await Product.getAll();
    res.render('catalog', {
        title: 'Каталог',
        products
    });
});

router.get('/:id', async (req, res) => {
    const product = await Product.getById(req.params.id);

    res.render('product', {
        title: `${product.title}`,
        product
    });
}); */

module.exports = router;