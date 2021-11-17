const {check , body} = require('express-validator');
const { getUsers} = require('../data/dataBase')
const bcrypt = require('bcrypt');
const db = require('../database/models')

module.exports = [
    /* check('email')
        .isLength({min:1})
        .withMessage('Debes ingresar un email')
        .isEmail()
        .withMessage('Debes ingresar un email valido'),

    check('password')
        .isLength({min:1})
        .withMessage('Debes ingresar una contraseña'), */

   body('custom')
        .custom((value,{req})=>{
            return db.User.findOne({
                where:{email:req.body.email}
            })
            .then(user =>{
                if(!bcrypt.compareSync(req.body.password, user.dataValues.password)){
                    return Promise.reject()
                }
            })
            .catch((err)=>{
                return Promise.reject('Credenciales invalidas')
            })
        }) 
]
