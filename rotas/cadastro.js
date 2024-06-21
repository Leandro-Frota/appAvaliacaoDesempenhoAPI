const { Router } = require("express");
const {getCadastro} = require("../controladores/cadastro.js")

const router = Router();

router.get('/', getCadastro)

module.exports = router