const bcrypt = require('bcrypt');
const {check , body} = require('express-validator');
const db = require('../database/models')
module.exports = [
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
                return Promise.reject('password incorrecta')
            })
        }) 
]