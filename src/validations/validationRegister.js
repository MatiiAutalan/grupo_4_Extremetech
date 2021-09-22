const {check , body} = require('express-validator');
const { getUsers} = require('../data/dataBase')
const db = require('../database/models')

module.exports = [
    check('email').isEmail().withMessage('Email invalido'),
    body('email').custom(value => {
        let user = db.User.findOne({
            where : {
                email : value
            }
        }).then(()=>{
            if (user == false){
                return true
            }else {
                return false
            }
            
        })
        //let user = getUsers.filter(user =>{
          //  return user.email == value
       // })
        return user
    }). withMessage('email ya esta registrado'),
    check('nombre').notEmpty().withMessage('Campo obligatorio'),
    check('password').notEmpty().withMessage('Campo obligatorio'),
    //check('apellido').notEmpty().withMessage('Campo obligatorio'),
    //check('telefono').notEmpty().withMessage('Campo obligatorio')
    //.isLength({ min:8 , max: 12}).withMessage('maximo 10 caracteres'),

    body('repeatPassword').custom((value, {req}) => value !== req.body.password ? false : true )
    .withMessage('Las contraseñas no coinciden')
    
]