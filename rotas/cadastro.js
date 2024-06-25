const { Router } = require("express");
const {getCadastro, postCadastro} = require("../controladores/cadastro.js")

const router = Router();

router.get('/', getCadastro)

router.post('/', postCadastro)

module.exports = router