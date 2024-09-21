const express = require('express')
const app = express()
const { products } = require('./data')


//CRIAR UMA API JSON
// app.get('/', (req, res) => {
//     res.json([
//         {name1: 'Ageu'},
//         {name2: 'Alex'}
//     ])
// })



//IMPORTAR LISTA PARA GERAR UM API COM JSON
app.get('/product', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
