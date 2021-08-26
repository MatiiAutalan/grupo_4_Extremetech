const {check , body} = require('express-validator');
const { getUsers} = require('../data/dataBase')
const bcrypt = require('bcrypt');

module.exports = [
    check('email').isEmail().withMessage('Email invalido'),

    body('email').custom(value =>{
        let user = getUsers.find (user => user.email == value)
         if(user !== undefined){
             return true
         }else{
             return false
         }
    }).withMessage('Email no registrado'),

    check('password').notEmpty().withMessage('Campo obligatorio'),

    body('password').custom((value, {req})=>{
        let user = getUsers.find(user => user.email === req.body.email)

        return bcrypt.compareSync(value, user.password)
    }).withMessage('contraseña Invalida')
]