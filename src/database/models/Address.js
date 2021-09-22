module.exports = (sequelize,DataTypes)=>{
    let alias = "Addresses";
    let cols ={
        id: {
            type:DataTypes.INTEGER(255).UNSIGNED,
            primeryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        address:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        cp:{
            type:DataTypes.INTEGER(10).UNSIGNED,
            allowNull:false
        },
        province_id:{
            type:DataTypes.INTEGER(50).UNSIGNED,
            allowNull:false
        }
        
    
    }
    let config ={
        tableName:"addresses",
        timestamps:false
    }
    const Address = sequelize.define(alias,cols,config)

     
    Address.associate = models =>{
        Address.belgonsTo(models.User,{
            as:"user_address",
            foreignKey:"address_id"
        })

        Address.belgonsTo(models.Province,{
            as:"province",
            foreignKey:"province_id"
        })
    }

    return Address;
}