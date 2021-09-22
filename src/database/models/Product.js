module.exports = (sequelize,DataTypes)=>{
    let alias = "Products";
    let cols ={
        id: {
            type:DataTypes.INTEGER(255).UNSIGNED,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING
        },
        price: {
            type:DataTypes.INTEGER(255).UNSIGNED,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT(),
            allowNull:false
        },
        discount:{
            type:DataTypes.INTEGER(10).UNSIGNED,
        },
        category_id:{
            type:DataTypes.INTEGER(50).UNSIGNED,
            allowNull:false
        },
        brand_id:{
            type:DataTypes.INTEGER(50).UNSIGNED,
            allowNull:false
        }
    
    }
    let config ={
        tableName:"products",
        timestamps:false
    }
    const Product = sequelize.define(alias,cols,config)

   Product.associate = models =>{
       Product.hasMany(models.Image_product,{
            as:"images_product",
           foreignKey: "product_id"
        })
       Product.belongsTo(models.Category,{
           as:"category",
           foreignKey:"category_id"
       })
       Product.belongsTo(models.Brands,{
           as:"brands",
           foreignKey:"brand_id"
       })
   }
    return Product;
}