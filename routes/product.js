/* const {Router} = require('express');
const router = Router();
const Product = require('../models/product');


router.get('/:id', async (req, res) => {
    const product = await Product.getById(req.params.id);

    res.render('product', {
        title: `${product.title}`,
        product
    });
}); 

module.exports = router; */