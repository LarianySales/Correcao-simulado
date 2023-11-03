const {DataTypes} = require('sequelize')//1- importar datatypes
//2 - Importar arquivo de conexão
const db = require('../db/conn')

const User = db.define('user',{
    name:{
        type:DataTypes.STRING,
        require:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        require:true,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        require:true,
        allowNull:false
    }
})
module.exports = User