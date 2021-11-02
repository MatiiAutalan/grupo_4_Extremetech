const {check, validatorResult, body} = require('express-validator')

module.exports =[
    check('name').isLength({max:3})
    .withMessage('Debes ingresar un nombre de modelo mayor a 2 ')
    
,
    check('price').isLength({min:1})
    .withMessage('Debes ingresar un precio valido '),
]