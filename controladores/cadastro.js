const { getCadastrados, insereNovoCadastro } = require("../servicos/cadastro")


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
        const cadastroNovo = req.body
        console.log(cadastroNovo)
        if(cadastroNovo){
        insereNovoCadastro(cadastroNovo)
        res.status(200).send("Cadastro realizado com sucesso")
        }else{
            res.status(402).send("Dados de cadastro incompletos")
        }
    }
    catch{
        res.status(500).send(error.message)
    }
}

module.exports = {
    getCadastro,
    postCadastro
}