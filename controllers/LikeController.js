const {UUID} = require('sequelize')
const Like = require('../models/Likes')

module.exports = class LikesController{
    static async likePost(request,response){
        const idpublication = request.body.idpublication
        const userId = request.session.userId

        //UUID
        const like={
            idLikes:1,
            userId:userId,
            PublicationId:idpublication
        }
        try {
            await Like.create(like)
            response.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}