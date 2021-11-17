const db = require('../database/models')
const getUrl = (req) =>
req.protocol+"://" +req.get('host') + req.originalUrl

module.exports ={
    getAllProducts:(req,res) =>{
        db.Product.findAll({
            include:[{association:'category'},{association:'images_product'}]
        })
        .then(product => res.status(200).json({
            meta:{
                endPoint:getUrl(req),
                total: product.length
            },
            data:product
        }))
        .catch(error => res.status(400).send(error))
    }
}