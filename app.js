const express = require("express")
const rotaCadastro = require("./rotas/cadastro")

const app = express();


const PORT = 8000;

app.use(express.json()) // middleware responsável por interpretar o body do req transformando json em objeto js

app.use('/cadastro', rotaCadastro )



app.listen(PORT, ()=>{
    console.log(`Escutando  PORTA ${PORT}` )
})



