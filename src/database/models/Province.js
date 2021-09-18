module.exports = (sequelize,DataTypes)=>{
    let alias = "Provinces";
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
        tableName:"provinces",
        timestamps:false
    }
    const Province = sequelize.define(alias,cols,config)
    return Province;
}