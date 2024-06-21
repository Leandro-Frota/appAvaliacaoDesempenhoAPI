const express = require("express")
const rotaCadastro = require("./rotas/cadastro")

const app = express();

const PORT = 8000;

app.use('/cadastro', rotaCadastro )
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Escutando a PORTA ${PORT}` )
})



