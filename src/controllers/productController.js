let {getProducts} = require('../data/dataBase')

const db= require('../database/models');
const {
    Op
} = require("sequelize");
let axios = require('axios')

const BASE_URL = "http://localhost:3040/api/";

module.exports = {
    index: (req,res) => {
        db.Product.findAll({
            include:[{association:'images_product'}]
            
        },{
            limit:3,
            offset:10
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

        db.Product.findAll({
            include:[{association:'category'},{association:'images_product'}],
            where:{discount: {
                [Op.gte]: 10
            }}
        }) 
        .then(( productosOferta)=>{
            
           
            res.render('generalProduct', {
               products:  productosOferta,
               title: "Nuestras Ofertas",
               session: req.session
           })  
           
        })
       
       
    },
  /*   notebook: (req,res) =>{
        let productosNotebook = getProducts.filter(productos => productos.categorias == "notebook")
        res.render('generalProduct', {
            getProducts: productosNotebook,
            title:"Notebooks",
            session: req.session
        }) 
    },*/
    categorias: (req,res) =>{
        //let categoriasId = req.params.categorias
        //let categorias = getProducts.filter(product => product.categorias == categoriasId)
        db.Product.findAll({
            include:[{association:'category'},{association:'images_product'}],
            where: {category_id : req.params.categorias}
        })
        .then(categorias =>{
            
            res.render('generalProduct', {
                products: categorias,
                title: "Productos",
                session: req.session
            })
        })
       
    },
    cart: (req, res) => {
        axios.get(`${BASE_URL}/cart`)
        .then(response =>{
          let products = response.data.data?.order_items.map(item => {
            return {
              ...item.products,
              quantity: item.quantity
            }
          })
          res.render('productCart', {
            session: req.session,
            products: products !== undefined ? products : []
          })}
          
        )
        .catch(err => res.send(err))
      }
}