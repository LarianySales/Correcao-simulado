const {DataTypes} = require('sequelize')//1- importar datatypes
//2 - Importar arquivo de conexão
const db = require('../db/conn')

const Publication = db.define('Publications',{
    publication:{
        type:DataTypes.STRING,
        require:true,
        allowNull:false
    }
})
module.exports = Publication