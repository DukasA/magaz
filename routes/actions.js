const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('actions', {
        title: 'Акции',
        isActions: true
    });
});

module.exports = router;