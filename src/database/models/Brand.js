module.exports = (sequelize,DataTypes)=>{
    let alias = "Brand";
    let cols ={
        id: {
            type:DataTypes.INTEGER(255).UNSIGNED,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING,
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