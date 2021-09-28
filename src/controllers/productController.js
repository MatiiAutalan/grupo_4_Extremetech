let {getProducts} = require('../data/dataBase')

const db= require('../database/models');

module.exports = {
    index: (req,res) => {
        db.Product.findAll({
            include:[{association:'images_product'}]
            
        })
        .then(products => {
            
            return res.render('generalProduct', {
             title: "Nuestros Productos",
             products,
             session: req.session
            })
        }) 
        .catch(error => res.send(error))
    },

    product:(req,res) =>{

        db.Product.findOne({
            where: {
                id: +req.params.id
            },
            include: [{
                association: "images_product"
            },{
                association: "brands"
            }]
        }) 
            .then(product => {
                res.render('productDetail', {
                    title: "Nuestros Productos",
                    product,
                    session: req.session
            })
            })
        
    },
    ofertas: (req,res) => {

        let productosOferta = getProducts.filter (productos => productos.discount >=10)
         res.render('generalProduct', {
            getProducts:  productosOferta,
            title: "Nuestras Ofertas",
            session: req.session
        })  
       
       
    },
    notebook: (req,res) =>{
        let productosNotebook = getProducts.filter(productos => productos.categorias == "notebook")
        res.render('generalProduct', {
            getProducts: productosNotebook,
            title:"Notebooks",
            session: req.session
        })
    },
    categorias: (req,res) =>{
        let categoriasId = req.params.categorias
        let categorias = getProducts.filter(product => product.categorias == categoriasId)
        res.render('generalProduct', {
            getProducts: categorias,
            title: "Productos",
            session: req.session
        })
    },
}