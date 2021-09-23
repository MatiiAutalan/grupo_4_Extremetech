const {check , body} = require('express-validator');
const { getUsers} = require('../data/dataBase')
const db = require('../database/models')

module.exports = [
    check('email').isEmail().withMessage('Email invalido'),
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
    check('nombre').notEmpty().withMessage('Campo obligatorio'),
    check('password').notEmpty().withMessage('Campo obligatorio'),
    //check('apellido').notEmpty().withMessage('Campo obligatorio'),
    //check('telefono').notEmpty().withMessage('Campo obligatorio')
    //.isLength({ min:8 , max: 12}).withMessage('maximo 10 caracteres'),

    body('repeatPassword').custom((value, {req}) => value !== req.body.password ? false : true )
    .withMessage('Las contraseñas no coinciden')
    
]