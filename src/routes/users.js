var express = require('express');
var router = express.Router();
let {index , register, finishBuy, userRegister,login, userLogin, userLogout }= require('../controllers/userController')
let validationRegister = require('../validations/validationRegister')
let validationLogin = require('../validations/validationLogin')
let userSession = require('../middlewares/userSession')
/* GET home page. */

router.get('/', index)


router.get('/register', register)
router.post('/register',validationRegister,userRegister )

router.get('/shop',userSession, finishBuy)

/* GET RUTA DEL LOGIN */
router.get('/login', login)
router.post('/login',validationLogin, userLogin)
router.get('/logout', userLogout)



module.exports = router;
