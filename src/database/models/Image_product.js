module.exports = (sequelize,DataTypes)=>{
    let alias = "Image_product";
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
        product_id:{
            type:DataTypes.INTEGER
        }
    }
    let config ={
        tableName:"images_product",
        timestamps:false
    }
    const Image_product = sequelize.define(alias,cols,config)

    Image_product.associate = models =>{
        Image_product.belongsTo(models.Product,{
            as:"images",
            foreignKey:"product_id"
        })
    } 

    return Image_product;
}