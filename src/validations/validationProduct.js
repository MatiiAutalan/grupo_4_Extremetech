const {check, validatorResult, body} = require('express-validator')

module.exports =[
    check('name').isLength({min:2})
    .withMessage('El campo modelo es obligatorio')
    
,
    check('price').isLength({min:1})
    .withMessage('Debes ingresar un precio valido ')
]
