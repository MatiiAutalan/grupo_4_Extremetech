module.exports = (sequelize,DataTypes)=>{
    let alias = "User";
    let cols ={
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        first_name:{
            type: DataTypes.STRING, 
        },
        last_name:{
            type: DataTypes.STRING, 
        },
        phone:{
            type:DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        rol_user:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        image:{
            type: DataTypes.STRING,
            allowNull:false
        },
        document:{
            type: DataTypes.INTEGER,
            
        },
        address:{
            type: DataTypes.STRING,
        },
        pc:{
            type:DataTypes.INTEGER
        },
        province:{
            type:DataTypes.STRING
        }
    }
    let config ={
        tableName:"users",
        timestamps:false
    }
    const User = sequelize.define(alias,cols,config)

    User.associate = models => {
        User.hasOne(models.Orders, {
            as: "order",
            foreignKey:"userId" 
        })
    }

    return User;
}