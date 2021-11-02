const db = require('../database/models');
const Op = db.Sequelize.Op;


module.exports = {
    index: (req,res) => {                              
        db.Product.findAll({
            include:[{association:'images_product'}]
            
        })
        .then(products => {
            let pcsArmadas = products.filter(producto => producto.category_id == 15)
            return res.render('index', {
                title: "Bienvenidos",
                products,
                session: req.session,
                pcsArmadas
            })
        })
    },

    about:(req,res) =>{
        res.render('about', {
            title:"about-us",
            session: req.session
        })
    },
    search: (req, res) => {                      //metodo search 
		db.Product.findAll({
            include: [{association:'brands'},
            {association:'images_product'}],    
            where:{ 
                name:{[Op.like]: `%${req.query.search.trim()}%`},    // el operador OP.LIKE es un operador de sequelize y sirve para traer en la tabla de productos en la columna NAME lo que nos llegue por el input de type search los "%" funcionan como comodines.
                description: {[Op.like]: `%${req.query.search.trim()}%`}
            }
        })
        
        .then(results => {
            
            res.render('results', {
                title: 'resultados de busqueda',
                results,
                session: req.session
            })
        })
		.catch(err => res.send(err))
	}
}