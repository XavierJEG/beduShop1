var router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Bienvenido a BeduShop")
})

router.use('/productos', require('./productos'));
router.use('/usuarios', require('./usuarios'));

module.exports = router;

