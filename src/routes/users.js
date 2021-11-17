var express = require('express');
var router = express.Router();
let {index , register, finishBuy, userRegister,login, userLogin, userLogout,editProfile, updateProfile, deleteUser, updatePass}= require('../controllers/userController')
let validationRegister = require('../validations/validationRegister')
let validationLogin = require('../validations/validationLogin')
let userSession = require('../middlewares/userSession')
let uploadAvatar = require('../middlewares/uploadAvatar')
let cookieCheck = require('../middlewares/cookieCheck')
const validationPass = require('../validations/validationPass');

/* GET home page. */

router.get('/',cookieCheck, index)
router.get('/edit/:id',userSession,cookieCheck,editProfile);
router.put('/edit/:id',uploadAvatar.single('image'),cookieCheck,updateProfile)


router.get('/register', register)
router.post('/register',validationRegister ,userRegister )

router.get('/shop',userSession, finishBuy)

/* GET RUTA DEL LOGIN */
router.get('/login', login)
router.post('/login',validationLogin, userLogin)
router.get('/logout', userLogout)
router.delete('/deleteUser/:id', deleteUser)
router.post('/update/:id',validationPass,updatePass )



module.exports = router;
