module.exports = (sequelize,DataTypes)=>{
    let alias = "Products";
    let cols ={
        id: {
            type:DataTypes.INTEGER(255).UNSIGNED,
            primeryKey:true,
            autoIncrement:true,
            allowNull: false
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
        },
        images_id:{
            type:DataTypes.STRING(255),
            allowNull:false
        }
    
    }
    let config ={
        tableName:"products",
        timestamps:false
    }
    const Product = sequelize.define(alias,cols,config)

    Product.associate = models =>{
        Product.belongsTo(models.Brand,{
            as: "brand",
            foreignKey:"brand_id"
        })
        Product.belongsTo(models.Category,{
            as:"category",
            foreignKey:"category_id"
        })

        Product.hasMany(models.Image_product,{
            as: "images_products",
            foreignKey:"images_id"
        })
    }
    return Product;
}