const express = require('express')
const router = express.Router()
const productController = require('../controllers/apiProducts')

router.get('/products' , productController.getAllProducts)

module.exports = router;