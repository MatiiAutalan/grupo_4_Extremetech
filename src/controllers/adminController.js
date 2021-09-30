const db = require('../database/models')

module.exports = {
    formAgregar:(req,res) =>{
       let category = db.Category.findAll()
        let brand =db.Brand.findAll()
        Promise.all([category,brand])
        .then( ([category, brand ])=>{
            res.render('cargaProducts', {
                title:"carga-productos",
                category,
                brand
            })}
        )
        .catch(err => console.log(err))
    },


    agregarProducto:(req,res) => {
        let arrayImages = [];
        if(req.files){
            req.files.forEach(imagen => {
                arrayImages.push(imagen.filename)
            })
        }
       

        let { name,
            price,
            discount,
            brand_id,
            category_id,
            description } = req.body;

        db.Product.create({
            name,
            price,
            discount,
            brand_id,
            category_id,
            description
        })
        .then(product => {
            if (arrayImages.length > 0){
                let images= arrayImages.map(image => {
                    return {
                        name: image,
                        product_id: product.id
                    }
                })
                db.Image_product.bulkCreate(images)
                .then(() => res.redirect('/products'))
                .catch(err => console.log(err))
            } else {
                db.Image_product.create({
                    name: "default.png",
                    product_id : product.id
                })
                
                .then(() => res.redirect('/products'))
                .catch(err => console.log(err))
            }
        })
    },
    listProducts:(req,res) =>{
        db.Product.findAll()
        .then(products => {
            return res.render('editProduct',{
                title: 'Edicion de productos',
                products
            })
        })
    },
    editForm:(req,res) =>{
        db.Product.findByPk(req.params.id)
        .then((product) => {
            res.render('editForm', {
                title:"Edicion del producto",
                product,
            })
        })
    },
    editProduct: (req,res) => {
        let { name,
            price,
            discount,
            brand_id,
            category_id,
            description } = req.body;

        db.Product.update({
            name,
            price,
            discount,
            brand_id,
            category_id,
            description
        }, {
            where: {
                id: +req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin/index')
        })
        .catch(err => console.log(err))
    },

    deleteProduct : (req, res) => {
        db.Product.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin/index')
        })
        .catch(err => console.log(err))
    },
    listUsers:(req,res) =>
    {
        db.User.findAll()
        .then(users => {
            return res.render('listUsers',{
                title: 'Lista de usuarios',
                users
            })
        })
    },
    
    vistaEdit:(req,res) =>{
        db.User.findByPk(req.params.id)
        .then(users =>{

            res.render('editUser', {
                title:"Edicion del usuario",
                users
            })
        })

    },
    editUser: (req,res) => {
        let {admin} = req.body  // esto es un destructuring del objeto body , donde traemos toda la info de los campos que vamos a editar
         db.User.update({
            rol_user: admin 

         },
         {where: {id:req.params.id}})
         .then(()=>{
             

             res.redirect('/admin/users')
         })
         
        //res.send(req.file) 
      },
      deleteUser : (req, res) => {
       db.User.destroy({
           where:{id:req.params.id}
       })

        res.redirect('/admin/index')
    },

    formCategoria:(req,res) =>{
        res.render('crearCategory',{
            title: 'Agregar categoria'
        })
    },

    agregarMarca:(req,res) => {
        let {categoria} = req.body
        db.Brand.create({
            name: categoria
        })
        .then(user =>{
            
            res.redirect('/admin/index')
        })

    },
    listarMarcas:(req,res) =>{
        db.Brand.findAll()
        .then( brands =>{
            res.render('listBrands',{
                title:'Marcas',
                brands
            })
        })
    },
    deleteBrand:(req,res) => {
        db.Brand.destroy({
            where:{id:req.params.id}
        })
 
         res.redirect('/admin/marca')
    }
}