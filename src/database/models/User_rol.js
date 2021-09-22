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
    
    User_rol.associate = models =>{
        User_rol.hasMany(models.User,{
            as:"user_rol",
            foreignKey:"rol_user"
        })
    }
    return User_rol;
}