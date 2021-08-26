const {check , body} = require('express-validator');
const { getUsers} = require('../data/dataBase')

module.exports = [
    check('email').isEmail().withMessage('Email invalido'),
    body('email').custom(value => {
        let user = getUsers.filter(user =>{
            return user.email == value
        })
        if (user == false){
            return true
        }else {
            return false
        }
    }). withMessage('email ya esta registrado'),
    check('nombre').notEmpty().withMessage('Campo obligatorio'),
    check('apellido').notEmpty().withMessage('Campo obligatorio'),
    check('telefono').notEmpty().withMessage('Campo obligatorio')
    .isLength({ min:8 , max: 12}).withMessage('maximo 10 caracteres'),

    body('repeatPassword').custom((value, {req}) => value !== req.body.password ? false : true )
    .withMessage('Las contraseñas no coinciden')
    
]