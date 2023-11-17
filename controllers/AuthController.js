const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {

  static async registerPost(request, response) {
const {name, email, password, confirmPassword}= request.body

//VALIDAÃO INDIVIDUAL


//VERIFICAR SENHAS
if(password != confirmPassword){
 request.flash("message", "As senhas não conferem,tente denovo")
 response.render('home')
 return
}
const checkUser = await User.findOne({where:{email:email},raw:true})
console.log(checkUser)
if(checkUser){
request.flash("message","O e-mail já está em uso")
response.render('home')
return
}
const salt = bcrypt.genSaltSync(10)
const hashedPassword = bcrypt.hashSync(password,salt)

const user = {
  name,email,
password:hashedPassword
}
try {
  const createUser = await User.create(user)
  request.session.UserId = createUser.id

  request.flash("message","Cadastro Realizado com SUS")
  request.session.save(()=>{
    response.redirect("/")
  })

} catch (error) {
  console.log(error)
}
  }

static async longinPost(request, response) {
const{email,password}=request.body

const user = await User.findOne({where:{email:email}})
if(!user){
  request.flash('message','Usuário não encontrado')
  response.render('home')
  return
}
const passwordMatch = bcrypt.compareSync(password, user.password)
if(!passwordMatch){
  request.flash("message","Senha inválida!")
  response.render("home")
}
request.session.UserId = user.id

request.flash("message","Usuário autenticado com sucesso")
console.log('Chegou')

request.session.save(()=>{
  response.redirect('/')
})
  }

  static async logout(request,response){
request.session.destroy()
response.redirect("/")
  }
};

