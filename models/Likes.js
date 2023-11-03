const {DataTypes} = require('sequelize')//1- importar datatypes
//2 - Importar arquivo de conexão
const db = require('../db/conn')
// IMPORTAR USERS E PUBLICAÇÃO
const User= require('../models/User')
const Publication= require('../models/Publication')

const Likes = db.define('likes',{
    id:{
        type:DataTypes.STRING,
        require:true,
        primaryKey:true
    }
    //MAS TBM PODER SER SEM INFORMAÇÕES PQ A TABLE VAI SER CRIADA COM O NECESSÁRIO
})
User.belongsToMany(Publication,{through:'likes'})
Publication.belongsToMany(User,{through:'likes'})

module.exports = Likes