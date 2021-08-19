let fs = require('fs');

module.exports = {
    getProducts: JSON.parse(fs.readFileSync('./src/data/product-list.json', 'utf-8')),
    getPc: JSON.parse(fs.readFileSync('./src/data/dataPcs.json','utf-8')),
    getUsers: JSON.parse(fs.readFileSync('./src/data/users.json','utf-8')),
    addProduct : (database) => {
        fs.writeFileSync('./src/data/product-list.json',JSON.stringify(database),'utf-8')},
    addUsers : (database) => {
        fs.writeFileSync('./src/data/users.json',JSON.stringify(database),'utf-8')}
}