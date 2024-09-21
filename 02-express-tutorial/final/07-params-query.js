const express = require('express');
const app = express();

const {products} = require('./data'); //IMPORTAR DADOS



//LISTAR TODOS OS PRDUTOS COM O METODO MAP()
app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })

    res.json(newProduct);
})


//BUCAR PRODUTO PELO NUMERO DE ID
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct)
})

 //BUCAR PRODUTO PELO NUMERO DE ID DE FORMA DINAMICA METODO BASE
app.get('/api/products/:ptoductID', (req, res) => {
    console.log(req);
    const singleProduct = products.find((product) => product.id === 2)
    res.json(singleProduct)
})


//BUSCAR PRODUTO PELO ID DE FORMA DINAMICA, METODO AVNAÇADO
app.get('/api/products/:productID', (req, res) => {

    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))

    //condição de erro de produto
    if(!singleProduct) {
        return res.status(404).send('Este produto não existe')
    }

    return res.json(singleProduct)
})


//PESQUISAR COM PARAMETROS QUERY
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('Helo word')
})

//FAZER BUSCA COM O AS INICIAIS DO NOME DO PRODUTO E LISTAR AS QUANTIDADES SOLICITADA
// url de pesquisa: http://localhost:5000/api/v1/query?quant=3
app.get('/api/v1/query', (req, res) => {
    const {searsh, quant} = req.query
    let listProducts = [...products];

    if(searsh) {
        listProducts = listProducts.filter((product) => {
            return product.name.startsWith(searsh)
        })
    }
    if(quant) {
        listProducts = listProducts.slice(0, Number(quant))
    }
    if(listProducts.length < 1) {
        res.status(200).end('Nenhu producto foi encotrado')
    }

    res.status(200).json(listProducts)
})





//PUBICAR SERVIDOR
app.listen(5000, () => {
    console.log('iniciar o servidor');
})
