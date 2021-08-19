var express = require('express');
var router = express.Router();
let {index , register, finishBuy, userRegister }= require('../controllers/userController')

/* GET home page. */

router.get('/', index)


router.get('/register', register)
router.post('/register',userRegister )

router.get('/shop', finishBuy)




module.exports = router;
