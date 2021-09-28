const db = require('../database/models');
const Op = db.Sequelize.Op;


module.exports = {
    index: (req,res) => {
        db.Product.findAll({
            include:[{association:'images_product'}]
            
        })
        .then(products => {
            return res.render('index', {
                title: "Bienvenidos",
                products,
                session: req.session
            })
        })
    },

    about:(req,res) =>{
        res.render('about', {
            title:"about-us",
            session: req.session
        })
    },
    search: (req, res) => {
		db.Product.findAll({
            where:{
                name:{[Op.like]: `%${req.query.search}%`}
            }
        })
        
        .then(results => {
            res.render('results', {
                title: 'resultados de busqueda',
                results,
                session: req.session
            })

        })
		
	}
}