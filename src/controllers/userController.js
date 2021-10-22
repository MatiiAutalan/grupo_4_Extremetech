const { getUsers, addUsers } = require("../data/dataBase");
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator');
const db = require('../database/models')

module.exports = {
    
    index: (req,res) => {
        db.User.findByPk(req.session.user.id)
        .then(user =>{
            res.render('userProfile', {
                title:"Cuenta",
                session: req.session,
                user
            })
        })
        
       
    },
    editProfile:(req,res)=>{    //metodo edit profile
       db.User.findByPk(req.params.id)
       .then(user=>{
        res.render('editProfile', {
            title:"Cuenta",
            session: req.session,
            user
        })
       })
  
    },
    updateProfile:(req,res)=> {
        let errors = validationResult(req);
        let  = {
            nombre,
            apellido,
            telefono,
            documento,
            telefono,
            address,
            pc,
            province
        } = req.body
        
        if(errors.isEmpty()){
            db.User.update({
                first_name:nombre,
                last_name:apellido,
                phone:telefono,
                address:address,
                document:documento,
                pc:pc,
                province:province,
                image: req.file && req.file.filename
            },
            {where:{id:req.params.id}})
            .then(()=>{
                 db.User.findByPk(req.params.id)
                .then((user)=>{ 
                    res.redirect('/user')
                 }) 
                   
            })
     
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
           
            res.render('login2', {
                title: "Login",
                session: req.session,
                
                
            })
        },
        userLogin:(req,res) => {
            let errors = validationResult(req)
            
            if(errors.isEmpty()){
               db.User.findOne({
                   where: {email:req.body.email}
               })
               .then((user)=>{
                   
                   
                req.session.user ={
                    id:user.id,
                    userName :user.nombre + "" + user.apellido,
                    email:user.email,
                    avatar :user.image,
                    rol: user.rol_user,
                    documento: user.document,
                    direccion: user.address
                    
                }  
                
                
                                         
                if(req.body.remember){
                    res.cookie('cookieTech', req.session.user , { maxAge: 5000*60})
                }          
                                                   
                res.redirect('/')
               })             
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