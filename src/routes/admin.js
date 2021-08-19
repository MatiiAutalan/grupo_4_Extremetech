var express = require('express');
var router = express.Router();

let {formAgregar, listProducts, editForm , agregarProducto, deleteProduct,editProduct, listUsers}= require('../controllers/adminController')

let upload = require('../middlewares/uploadImage')



/* GET  donde requerimos el formulario para agregar nuevo producto */
router.get('/agregarProducto', formAgregar)
/* Metodo POST ,Captura los datos para agregar un producto*/
router.post('/agregarProducto',upload.array('product-image') ,agregarProducto)

/* Index del admin, donde vamos a ver todos nuestros productos */
router.get('/index', listProducts)  

/* GET - requiero el formulario de edicion con los values */
router.get('/edit/:id', editForm)
/* PUT -  edito el formulario y lo envio */
router.put('/edit/:id',upload.array('product-image') ,editProduct)

/*GET - Donde vamos a mostrar la lista de usuarios registrados */
router.get('/users',listUsers)

router.delete('/delete/:id', deleteProduct )

module.exports = router;

