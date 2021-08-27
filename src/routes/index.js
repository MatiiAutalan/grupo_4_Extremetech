var express = require('express');
var router = express.Router();
let {index , about, search }= require('../controllers/indexController')
let cookieCheck = require('../middlewares/cookieCheck')

/* GET home page. */
router.get('/',cookieCheck, index)
router.get('/about',about)
router.get('/search', search)

module.exports = router;
