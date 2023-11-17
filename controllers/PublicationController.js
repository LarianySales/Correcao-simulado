const Publication = require("../models/Publication")
module.exports = class PublicationController{
    static async showPublication(request,response){
       try {
        const publications = await Publication.findAll({raw:true})
        response.render("home",{publications})
        console.log(publications)
       } catch (error) {
        console.log(error)
       }
    }
}