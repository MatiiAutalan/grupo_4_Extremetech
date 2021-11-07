const db = require('../database/models')
const {validationResult} = require('express-validator');
const Op = db.Sequelize.Op;

module.exports = {
    formAgregar:(req,res) =>{     
        let errors = []              // Metodo de renderizar la vista y mandarle los datos que requiere
        let category = db.Category.findAll()  // Busco en nuestro modelo de categorias , todas las categorias 
        let brand =db.Brand.findAll()           // Busco en nuestro modelo de marcas , todas las marcas
        Promise.all([category,brand])          // Ejecuto las 2 promesas con un promise All
        .then( ([category, brand ])=>{ 
                 // .Then significa "luego", esto quedaria como que luego de ejecutarse otorga esas objetos
            res.render('cargaProducts', {       //renderizo la vista y le paso un objeto con category y brand que son los objetos que obtuve del then
                title:"carga-productos",
                category,
                brand,
                errors : errors,
                session: req.session.user
            })}
            )
            .catch(err => console.log(err))    // en caso de que algo salga mal , el catch captura el error y lo muestra en la consola
        },
        
        
        agregarProducto:(req,res) => {     // Metodo de agregar producto
            let errors = validationResult(req)
            if(errors.isEmpty()){
                let arrayImages = [];           // creo un array vacio para almacenar las imagenes
                if(req.files){                      // si existen archivos en el req.files que es del input tipo file
                    req.files.forEach(imagen => {       // que haga un foreach de eso que me llega y que recorra y pushe en el array cde cada imagen el filename que es el nombre de la imagen
                        arrayImages.push(imagen.filename)  // pusheo
                    })
                }
                
                
                let { name,
                    price,
                    discount,
                    brand_id,
                    category_id,
                    description,
                    color } = req.body;   // destructuring de los input del formulario
                    
                    db.Product.create({    // de la base de datos de productos que me cree 1 producto
                        name,
                        price,
                        discount,
                        brand_id,
                        category_id,
                        description,
                        color                      // a estos atributos les asigno lo que llega por el req body
                    })
                    .then(product => {               // luego de eso , el resultado es un producto ya creado llamado "product"
                        if (arrayImages.length > 0){    // si el array de imagenes es mayor a 0
                            let images= arrayImages.map(image => {          // le ejecuto el metodo map que me devuelve un array modificado
                                return {
                                    name: image,                   // le asigno la imagen en la columna name de mi base de datos
                                    product_id: product.id          // y el id del producto correspondiente
                                }
                            })
                            db.Image_product.bulkCreate(images)    // este metodo de sequelize crea varios datos
                            .then(() => res.redirect('/products'))   // una vez creado te redirige a /products
                            .catch(err => console.log(err))
                        } else {
                            db.Image_product.create({         // si el array no es mayor a 0 , osea el usuario no sube ninguna imagen se carga una imagen default en el producto creado
                                name: "default.png",            // le paso directamente el nombre del dato
                                product_id : product.id
                            })
                            
                            .then(() => res.redirect('/products'))
                            .catch(err => console.log(err))
                        }
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                }else{
                    let brand =db.Brand.findAll()
                    let category = db.Category.findAll()
                    Promise.all([category,brand])
                    .then( ([category, brand ])=>{
                       
                        
                        res.render('cargaProducts', {       
                            title:"carga-productos",
                            category,
                            brand,
                            errors : errors.mapped(),
                            session: req.session.user
                        })}
                        )
                        .catch(err => console.log(err))    
                    }},
                    listProducts:(req,res) =>{                          //Metodo de listar productos
                        db.Product.findAll({
                            include:[{association:'images_product'}]         //asocio la tabla imagenes , este es el alias que le asigne en el modelo de productos
                        })
                        .then(products => {
                            
                            
                            
                            return res.render('editProduct',{
                                title: 'Edicion de productos',
                                products,
                                session: req.session.user
                            })
                        })
                    },
                    editForm:(req,res) =>{                      //Metodo de editar producto
                        db.Product.findByPk(req.params.id)         // Busco en la base de datos por el id que me llego en la url
                        .then((product) => {
                            res.render('editForm', {
                                title:"Edicion del producto",
                                product,
                                session: req.session.user
                            })
                        })
                    },
                    editProduct: (req,res) => {             // Metodo de editar el producto
                        
                        let { name,
                            price,
                            discount,
                            brand_id,
                            category_id,
                            description } = req.body;     // destructuring del body
                            
                            db.Product.update({             //usando el metodo update de sequelize "Update" actualizamos las siguientes columnas de la tabla productos ,con los datos que llegan del body 
                                name,
                                price,
                                discount,
                                brand_id,
                                category_id,
                                description
                            }, {
                                where: {                    // donde ? en el parametro que llega por la url
                                    id: +req.params.id
                                }
                            })
                            .then((productUpdated) => {       
                                
                                if (req.files.length > 0) {
                                    db.Image_product.destroy({          // destruyo todas las imagenes
                                        where: {
                                            product_id: +req.params.id, // que coincide con el product_id que recibe por url
                                        },
                                    }).then(()=>{
                                        let images = [];
                                        let nameImages = req.files.map((image) => image.filename);
                                        nameImages.forEach((img) => {
                                            let newImage = {
                                                product_id: req.params.id,
                                                name: img
                                            };
                                            images.push(newImage);
                                        });
                                        db.Image_product
                                        .bulkCreate(images)
                                        .then((result) => {
                                            res.redirect(`/admin/index`);
                                        })
                                    })
                                    .then(() => {
                                        res.redirect('/admin/index')
                                    }) 
                                    .catch(err => console.log(err))
                                }else {
                                    res.redirect('/admin/index')
                                }
                                
                            })
                        },
                        
                        deleteProduct : (req, res) => {   // metodo de delete 
                            db.Product.destroy({            // que elimine del producto que tengo en la url de id
                                where: {
                                    id: +req.params.id
                                }
                            })
                            .then(() => {
                                res.redirect('/admin/index')
                            })
                            .catch(err => console.log(err))
                        },
                        listUsers:(req,res) =>   // listo usuarios 
                        {
                            db.User.findAll()   // en el modelo de usuarios , traigo todos
                            .then(users => {
                                return res.render('listUsers',{
                                    title: 'Lista de usuarios',
                                    users,
                                    session: req.session.user
                                })
                            })
                        },
                        
                        vistaEdit:(req,res) =>{     //renderiza la vista para editar usuarios
                            db.User.findByPk(req.params.id) // Busca en usuarios lo que llega por la URL
                            .then(users =>{
                                
                                res.render('editUser', {
                                    title:"Edicion del usuario",
                                    users,
                                    session: req.session.user
                                })
                            })
                            
                        },
                        editUser: (req,res) => {
                            let {admin} = req.body  // esto es un destructuring del objeto body , donde traemos toda la info de los campos que vamos a editar
                            db.User.update({        // Metodo de sequelize de update
                                rol_user: admin     // el administrador solo puede modificar el rol del usuario , rol_user es como figura en nuestra base de datos y "admin" es el nombre del input
                                
                            },
                            {where: {id:req.params.id}})   // esto es un condicional "where" hace referencia "donde" , lo que llega por la url
                            .then(()=>{         
                                
                                
                                res.redirect('/admin/users')        // una vez que pasa todo lleva a la vista de /admin/users que es donde estan listados los usuarios
                            })
                            
                            //res.send(req.file) 
                        },
                        deleteUser : (req, res) => {    //metodo delete de sequelize
                            db.User.destroy({               // del modelo usuario destruye/borra 
                                where:{id:req.params.id}    // lo que recibe por url
                            })
                            
                            res.redirect('/admin/index')
                        },
                        
                        formCategoria:(req,res) =>{         // Metodo para renderizar el metodo de agregar marcas 
                            res.render('crearCategory',{    // Vista de agregar marcas
                                title: 'Agregar categoria'  ,
                                session: req.session.user
                            })
                        },
                        
                        agregarMarca:(req,res) => {         //metodo de agregar marca
                            let {categoria} = req.body       // destructuring del req.body que es lo que viene de los inputs seria el name
                            db.Brand.create({                 // del modelo marcas que cree una nueva marca
                                name: categoria             // le asigno en el nombre que es como lo llamo en mi tabla , lo que llega del req.body
                            })
                            .then(user =>{
                                
                                res.redirect('/admin/index')
                            })
                            
                        },
                        listarMarcas:(req,res) =>{          // metodo de listar marcas
                            db.Brand.findAll()              // Busca en el modelo marcas
                            .then( brands =>{               // en la respuesta me da marcas
                                res.render('listBrands',{       // renderizo en la vista listbrands todas las marcas que me encontro la promesa
                                    title:'Marcas',
                                    brands,
                                    session: req.session.user
                                })
                            })
                        },
                        deleteBrand:(req,res) => {  //metodo de eliminar marca , similar a los otros
                            db.Brand.destroy({
                                where:{id:req.params.id}
                            })
                            
                            res.redirect('/admin/marca')
                        },
                        search: (req,res) =>{
                            db.User.findAll({include:[{association:'images_product'}],
                                where:{
                                    first_name: {[Op.like]: `%${req.query.search.trim()}%`},
                                }
                            })
                            .then(results => {
                                
                                res.render('resultadoUser', {
                                    title: 'resultados de busqueda',
                                    results,
                                    session: req.session
                                })
                            })
                            .catch(err => res.send(err))
                        },
                        search2: (req,res) =>{
                            db.Product.findAll({
                                where:{
                                    name: {[Op.like]: `%${req.query.search.trim()}%`}
                                }
                            })
                            .then(results => {
                                
                                res.render('resultadoProduct', {
                                    title: 'resultados de busqueda',
                                    results,
                                    session: req.session
                                })
                            })
                            .catch(err => res.send(err))
                        },
                        search3: (req,res) =>{
                            db.Brand.findAll({
                                where:{
                                    name: {[Op.like]: `%${req.query.search.trim()}%`},
                                }
                            })
                            .then(results => {
                                
                                res.render('resultadoBrand', {
                                    title: 'resultados de busqueda',
                                    results,
                                    session: req.session
                                })
                            })
                            .catch(err => res.send(err))
                        }
                        
                        
                    }
                    