const express = require('express')
const router = express.Router()
const productController = require('../controllers/apiProducts')
let orderController = require('../controllers/api/orderController')

router.get('/products' , productController.getAllProducts)

/* Cart */
router.post('/cart/:product/:quantity', orderController.addToCart)
router.get('/cart', orderController.productsInCart)
router.delete('/cart/removeOne/:item', orderController.removeOneFromCart)
router.delete('/cart/removeAll/:item', orderController.removeAllFromCart)
router.delete('/cart/clearCart', orderController.clearCart)


module.exports = router;