const {check } = require('express-validator');
module.exports = [
    check('nombre').isEmpty().withMessage('Campo obligatorio'),
    check('apellido').isEmpty().withMessage('Campo obligatorio')

]