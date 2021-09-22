module.exports = (sequelize,DataTypes)=>{
    let alias = "Images_product";
    let cols ={
        id: {
            type:DataTypes.INTEGER(255).UNSIGNED,
            primeryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING(100).UNSIGNED,
            allowNull:false
        }
    }
    let config ={
        tableName:"images_product",
        timestamps:false
    }
    const Image_product = sequelize.define(alias,cols,config)
    return Image_product;
}