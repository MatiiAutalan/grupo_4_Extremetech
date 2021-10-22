const {check , body} = require('express-validator');
//const { getUsers} = require('../data/dataBase')
const db = require('../database/models')

module.exports = [
    check('email').isEmail().withMessage('Email invalido'),
<<<<<<< HEAD
    
=======
    body('email').custom((value, {req}) => {
      return db.User.findOne({
          where : {
              email : req.body.email
          }
      })
      .then(user => {
          if(user){
              return Promise.reject('Este email ya está registrado')
          }
      })
    }),
>>>>>>> 80f2ca476e4dc700485f2f27a1780f4b61b9926c
    check('nombre').notEmpty().withMessage('Campo obligatorio'),
    check('password').notEmpty().withMessage('Campo obligatorio'),
    body('email').custom(value => {
        db.User.findOne({
            where: {
                email : value
            }
        })
        .then(user =>{
          
            if(user){
                return Promise.reject('Este email ya esta registrado')
            }
        })
    }),
    //check('apellido').notEmpty().withMessage('Campo obligatorio'),
    //check('telefono').notEmpty().withMessage('Campo obligatorio')
    //.isLength({ min:8 , max: 12}).withMessage('maximo 10 caracteres'),

    body('repeatPassword').custom((value, {req}) => value !== req.body.password ? false : true )
    .withMessage('Las contraseñas no coinciden')
    
]