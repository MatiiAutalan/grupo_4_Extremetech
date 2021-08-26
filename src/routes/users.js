var express = require('express');
var router = express.Router();
let {index , register, finishBuy, userRegister }= require('../controllers/userController')
let validationRegister = require('../validations/validationRegister')
/* GET home page. */

router.get('/', index)


router.get('/register', register)
router.post('/register',validationRegister,userRegister )

router.get('/shop', finishBuy)




module.exports = router;
