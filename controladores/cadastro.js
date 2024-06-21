

function getCadastro(req,res){
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