module.exports = (sequelize,DataTypes)=>{
    let alias = "Categories";
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
        tableName:"categories",
        timestamps:false
    }
    const Category = sequelize.define(alias,cols,config)
    return Category;
}