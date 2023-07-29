const db=require('../config/dbConfig')
const{Sequlize,DataTypes}=require('sequelize')
const userModel=db.define("candidates",{
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true  
    },
    name:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    sendflag:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    created_at:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    updated_at:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    schduledtime:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }

},
{
    freezeTableName:true,
    timestamps:false,
}
)
module.exports=userModel