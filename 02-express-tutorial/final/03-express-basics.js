const express = require('express');
const path = require('path'); //CAMINHO

//METODO DO OBJECTO EXPRESS
const app = express();


//METODO BASE PARA PEGAR CONTEUDO COM O EXPRESS
// app.get('/', (req, res) => {
//     res.staus(200).send('pagina home')
// })

//ELEMENTOS PUBLICO
app.use(express.static('./public'))

//PUBLICAR CONTEUDO
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.get('*', (req, res) => {
    res.status(404).send('page not found')
})



//PUBLICAR O SERVIDOR
app.listen(5000, () => {
    console.log('sevidor activo com express');
})


//OS METODOS PRINCIPAI DO EXPRESS
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
