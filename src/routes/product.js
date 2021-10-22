var express = require('express');
var router = express.Router();
let {index , product, ofertas, notebook, categorias}= require('../controllers/productController')


/* GET home page. */
router.get('/',index)
router.get('/detalle/:id',product)
router.get('/ofertas', ofertas)
/* router.get('/notebooks', notebook) */
router.get('/:categorias', categorias)



module.exports = router;
