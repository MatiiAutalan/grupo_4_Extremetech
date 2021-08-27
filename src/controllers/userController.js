const { getUsers, addUsers } = require("../data/dataBase");
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator');

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
        
        if(errors.isEmpty()){

            let lastId = 1;   // Creo una variable con un id , esta  variable representa un contador basicamente

            getUsers.forEach(user => {   // recorro el array de productos buscando un producto
                if(user.id > lastId){    // Si el id del producto es mayor que la variable
                    lastId = user.id     //va a valer 1
                }
            });
    
    
            let nuevoUsuario = {
                
                id: lastId + 1,  // para crear un nuevo producto , le estamos diciendo que el id que recibe el nuevo producto , va a ser el valor del lastid, osea el ultimo producto que  itero +1
                nombre: req.body.nombre.trim(),  // escribimos el modelo , con el parametro que recibimos por el  objeto body que nos envia la pagina y con el "." estamos entrando en el objeto
                apellido: req.body.apellido.trim(),
                telefono: req.body.telefono.trim(),
                email: req.body.email.trim(),
                password: bcrypt.hashSync(req.body.password.trim(),10),
                documento: "",
                admin: false,
                image:'user.jpg'
            }
    
            getUsers.push(nuevoUsuario);   // le estamos metiendo a la variable getproducts que es la que tiene todos los productos el nuevo producto que estamos creando
            
            addUsers(getUsers);  // esta funcion escribe el json  y recibe como parametro la base de datos donde va a ser escrito
            
            res.redirect('/')  // una vez agregado el producto nos redirecciona  a la vista de productos
        }else{
            res.render('register', {
                title : "asd",
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
            title: "prueba",
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