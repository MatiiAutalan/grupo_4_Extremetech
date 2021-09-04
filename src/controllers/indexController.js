let {getPc, getProducts} = require('../data/dataBase')


module.exports = {
    index: (req,res) => {
         res.render('index', {
            title: "Bienvenidos",
            getPc,
            getProducts,
            session: req.session
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