module.exports.checkAuth = function(request, response, next) {
const userId = request.session.UserId
if(!userId){
response.redirect("/login")
}
  next();
}