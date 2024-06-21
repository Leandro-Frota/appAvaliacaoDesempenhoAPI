

function getCadastro(req,res){
    try{
        res.send("Veja os ja cadastrados realizado com sucesso")
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