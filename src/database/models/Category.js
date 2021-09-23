module.exports = (sequelize,DataTypes)=>{
    let alias = "Category";
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
        tableName:"categories",
        timestamps:false
    }
    const Category = sequelize.define(alias,cols,config)

    Category.associate = models =>{
        Category.hasMany(models.Product,{
            as: "products",
            foreignKey:"category_id"
        })
    } 

    return Category;
}