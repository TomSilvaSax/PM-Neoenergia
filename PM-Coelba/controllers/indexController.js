
const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs')


const UsuarioService = require('../service/UsuarioService');
let usuariosjson = path.join('usuarios.json')
const controller = {


registroFrom: async (request, response,) => {
    response.render('cadastro', { recMenu: request.session.recMenu, rota: "cadastro" })
  },

  //Cria Usuario
  salvarUsuario: async (request, response) => {

    let { files } = request;
     bcrypt.hashSync('senha', 10)
      const {
        name, 
        matricula, 
        filiação, 
        UTD, 
        senha,
      } = request.body
  
      const Usuario = await UsuarioService.createUsuario(
       
        name, 
        matricula, 
        filiação, 
        UTD, 
        senha,
      )
  
      return response.json(Usuario);
    },}

    module.exports = controller