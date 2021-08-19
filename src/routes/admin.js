var express = require('express');
var router = express.Router();

let {formAgregar, listProducts, editForm , agregarProducto, deleteProduct,editProduct, listUsers, vistaEdit, editUser, deleteUser}= require('../controllers/adminController')

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


/*GET - requiero la vista de editar usuarios */
router.get('/user/:id',vistaEdit )

/* PUT - Donde vamos a editar el perfil del usuario desde el panel de administrador */ 
router.put('/user/:id', upload.single('userImage'), editUser )

router.delete('/delete/:id', deleteProduct )

/* DELETE - Donde vamos a eliminar el usuario */
router.delete('/deleteUser/:id', deleteUser)

module.exports = router;

