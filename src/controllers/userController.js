const { getUsers, addUsers } = require("../data/dataBase");
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator');
const db = require('../database/models')

module.exports = {
    
    index: (req,res) => {
        let user = getUsers.find(user => user.id === +req.session.user.id)
        
        res.render('userProfile', {
            title:"Cuenta",
            session: req.session,
            user
        })
    },
    editProfile:(req,res)=>{
        let user = getUsers.find(user => user.id === +req.params.id)
        
        res.render('editProfile', {
            title:"Cuenta",
            session: req.session,
            user
        })
    },
    updateProfile:(req,res)=> {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let user = getUsers.find(user => user.id === +req.params.id)
            let  = {
                nombre,
                apellido,
                telefono,
                documento,
            } = req.body
            user.id = user.id
            user.nombre = nombre
            user.apellido = apellido
            user.telefono = telefono
            user.documento = documento
            user.image = req.file ? req.file.filename : user.image
            
            addUsers(getUsers)
            
            delete user.password
            
            req.session.user = user
            
            res.redirect('/user')
            
        }else{
            res.render('userProfile', {
                title:"Cuenta",
                session: req.session,
                old: req.body,
                errors : errors.mapped()
            })
        }
    },
    register:(req,res) =>{
        res.render('register', {
            title: "Registro",
            session: req.session
        })
    },
    userRegister:(req,res) => {
        let errors = validationResult(req);
        res.send(errors)
            if(errors.isEmpty()){

                let {nombre,apellido,telefono,email,password} =req.body

               db.User.create({                    
                    first_name: nombre,  
                    last_name: apellido,
                    phone: telefono,
                    email: email,
                    password: bcrypt.hashSync(password,10),
                    rol_user: 0,
                    image:'user.jpg',
                    
                })
                .then(()=>{
                   res.redirect('/')
                }).catch(error =>console.log(error))
     
            }else{               
                res.render('register', {
                    title : "Registro",
                    errors: errors.mapped(),
                    old : req.body,
                    session: req.session
                })
            }                  
        },
        finishBuy:(req,res) =>{
            res.render('finishBuying', {
                title:"Fin de transaccion",
                session: req.session
            })
        },
        
        login:(req,res) => {
            let user = getUsers.find(user => user.id === +req.params.id)
            res.render('login2', {
                title: "Login",
                session: req.session,
                user
                
            })
        },
        userLogin:(req,res) => {
            let errors = validationResult(req)
            
            if(errors.isEmpty()){
                let user = getUsers.find (user => user.email === req.body.email)
                req.session.user ={
                    id:user.id,
                    userName :user.nombre + "" + user.apellido,
                    email:user.email,
                    avatar :user.image,
                    rol: user.admin
                    
                }
                
                
                if(req.body.remember){
                    res.cookie('cookieTech', req.session.user , { maxAge: 5000*60})
                }
                
                res.locals.user = req.session.user
                
                res.redirect('/')
            }else{
                res.render('login2',{
                    errors: errors.mapped(),
                    title: 'Login',
                    session: req.session
                    
                })
            }
            
            
        },
        userLogout:(req,res)=> {
            req.session.destroy();
            
            if(req.cookies.cookieTech){
                res.cookie('cookieTech','', {maxAge: -1})
            }
            res.redirect('/')
        }
        
        
    }