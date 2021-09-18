module.exports = (sequelize,DataTypes)=>{
    let alias = "Users_rol";
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
        tableName:"users_rol",
        timestamps:false
    }
    const User_rol = sequelize.define(alias,cols,config)
    return User_rol;
}