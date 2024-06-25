const fs = require("fs")

function getCadastrados(){
    return JSON.parse(fs.readFileSync("cadastros.json"))
}


function insereNovoCadastro(novoCadastro){

    const cadastrados = JSON.parse(fs.readFileSync("cadastros.json"))

    const novaListaCadastro = [...cadastrados, novoCadastro ]

    fs.writeFileSync("cadastros.json", JSON.stringify(novaListaCadastro)) 
}


module.exports = {
    getCadastrados,
    insereNovoCadastro
}