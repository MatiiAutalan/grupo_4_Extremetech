let {getPc, getProducts} = require('../data/dataBase')

const db = require('../database/models')


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
		let result = []
		getProducts.forEach(product => {
			if (product.modelo.toLowerCase().includes(req.query.keywords.toLowerCase())||product.marca.toLowerCase().includes(req.query.keywords.toLowerCase()) ){
				result.push(product)
			}
		});
		
		 	res.render('results', {
            title: 'resultados de busqueda',
			result,
			search: req.query.keywords,
            session: req.session
			
		}) 
        /* res.send(result) */
	}
}