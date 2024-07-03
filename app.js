const express = require("express")
const rotaCadastro = require("./rotas/cadastro")

const app = express();

const PORT = 8000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.json()) // middleware responsável por interpretar o body do req transformando string em objeto js

app.use('/cadastro', rotaCadastro )

app.listen(PORT, ()=>{
    console.log(`Escutando  PORTA ${PORT}` )
})



