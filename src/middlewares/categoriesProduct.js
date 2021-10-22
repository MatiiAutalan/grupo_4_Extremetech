let db = require('../database/models')
module.exports = (req, res, next) => {
    db.Category.findAll({
        order: [['name','ASC']]
    })
    .then(categories => {
        res.locals.categories = categories
        next()
    })
}