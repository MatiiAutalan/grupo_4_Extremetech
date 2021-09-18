module.exports = (sequelize,DataTypes)=>{
    let alias = "Users";
    let cols ={
        id: {
            type:DataTypes.INTEGER(255).UNSIGNED,
            primeryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING(100),
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull:false,
            unique:true
        },
        password:{
            type: DataTypes.STRING(60),
            allowNull:false
        },
        rol_user:{
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull:false
        },
        image:{
            type: DataTypes.STRING(255),
            allowNull:false
        },
        document:{
            type: DataTypes.INTEGER(20).UNSIGNED,
            allowNull:false
        },
        address_id:{
            type: DataTypes.INTEGER(100).UNSIGNED,
            allowNull:false
        }
    
    }
    let config ={
        tableName:"users",
        timestamps:false
    }
    const User = sequelize.define(alias,cols,config)
    return User;
}