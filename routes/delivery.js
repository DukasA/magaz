const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('delivery', {
        title: 'Оплата и Доставка',
        isDelivery: true
    });
});

module.exports = router;