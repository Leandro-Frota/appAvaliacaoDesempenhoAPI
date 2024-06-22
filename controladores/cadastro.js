const { getCadastrados } = require("../servicos/cadastro")


function getCadastro(req,res){
    try{
        const cadastrados = getCadastrados()    
        res.send(cadastrados)
    }
    catch{
        res.status(500)
        res.send(error.message)
    }
}
function postCadastro(req,res){
    try{
        res.send("Cadastro realizado com sucesso")
    }
    catch{
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getCadastro
}