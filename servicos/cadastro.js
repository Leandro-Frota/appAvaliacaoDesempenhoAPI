const fs = require("fs")

function getCadastrados(){
    return JSON.parse(fs.readFileSync("cadastros.json"))
}

module.exports = {
    getCadastrados
}