var express = require('express');
var router = express.Router();

let {formAgregar, listProducts, editForm ,search,search2,search3, agregarProducto, deleteProduct,editProduct, listUsers, vistaEdit, editUser, deleteUser,formCategoria,agregarMarca,listarMarcas,deleteBrand}= require('../controllers/adminController')

let upload = require('../middlewares/uploadImage')
let uploadAvatar = require('../middlewares/uploadAvatar')
let userAdmin = require('../middlewares/userAdmin')
let userSession = require('../middlewares/userSession')
let cookieCheck = require('../middlewares/cookieCheck')
let validationProducts = require('../validations/validationProduct')



/* GET  donde requerimos el formulario para agregar nuevo producto */
router.get('/agregarProducto',cookieCheck,userAdmin, formAgregar)
/* Metodo POST ,Captura los datos para agregar un producto*/
router.post('/agregarProducto',upload.array('product-image'),validationProducts ,agregarProducto)

/* Metodo para manipular  una marca */
router.get('/agregarProducto',cookieCheck,userAdmin, formAgregar)
router.get('/agregarMarca',userAdmin,formCategoria)
router.post('/agregarMarca',agregarMarca)
router.get('/marca',userAdmin,listarMarcas)
router.delete('/deleteBrand/:id',deleteBrand)

/* Index del admin, donde vamos a ver todos nuestros productos */
router.get('/index',cookieCheck,userAdmin, listProducts)  

/* GET - requiero el formulario de edicion con los values */
router.get('/edit/:id',userAdmin, editForm)
/* PUT -  edito el formulario y lo envio */
router.put('/edit/:id',upload.array('product-image') ,editProduct)

/*GET - Donde vamos a mostrar la lista de usuarios registrados */
router.get('/users',cookieCheck,userAdmin,listUsers)


/*GET - requiero la vista de editar usuarios */
router.get('/user/:id',cookieCheck,userAdmin,vistaEdit )

/* PUT - Donde vamos a editar el perfil del usuario desde el panel de administrador */ 
router.put('/user/:id', uploadAvatar.single('userImage'), editUser )

router.delete('/delete/:id', deleteProduct )

/* DELETE - Donde vamos a eliminar el usuario */
router.delete('/deleteUser/:id', deleteUser)

router.get('/search', search)
router.get('/search2', search2)
router.get('/search3', search3)

module.exports = router;

