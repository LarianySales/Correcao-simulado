const {DataTypes} = require('sequelize')//1- importar datatypes
//2 - Importar arquivo de conexão
const db = require('../db/conn')
// IMPORTAR USERS E PUBLICAÇÃO
const User= require('../models/User')
const Publication= require('../models/Publication')

const Comments = db.define('comments',{
    comment:{
        type:DataTypes.STRING,
        require:true,
       allowNull:false
    }
    //MAS TBM PODER SER SEM INFORMAÇÕES PQ A TABLE VAI SER CRIADA COM O NECESSÁRIO
})
User.belongsToMany(Publication,{through:'comments'})
Publication.belongsToMany(User,{through:'comments'})

module.exports = Comments