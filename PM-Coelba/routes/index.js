var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")



router.post('/cadastro', indexController.salvarUsuario);
router.get('/cadastro', indexController.registroFrom);