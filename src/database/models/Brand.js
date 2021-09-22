module.exports = (sequelize,DataTypes)=>{
    let alias = "Brands";
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
        tableName:"brands",
        timestamps:false
    }
    const Brand = sequelize.define(alias,cols,config)

    Brand.associate = models =>{
        Brand.hasMany(models.Product,{
            as: "products",
            foreignKey:"brand_id"
        })
    }

    return Brand;
}