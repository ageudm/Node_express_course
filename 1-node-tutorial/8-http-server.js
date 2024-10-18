//MODULO HTTP PARA CRIAR E MANIPULAÇÃO DE SERVIDOR
const http = require('http');

//CRIAR UM SERVIDOR SIMPLES
// const server = http.createServer((req, res) => {
//     res.write('Ola miguel inicio do novo servidor');
//     res.end();
// }); server.listen(5000)

//ADD URL AO SERVIDOR
const server = http.createServer((req, res) => {
    //add url ou caminho
    if(req.url === '/') {
        res.end('pagina home');
    }
    else if(req.url === '/about') {
        res.end('pagina about');
    } else {
        res.end('pagina nao encotrada');
    }

}); server.listen(5000)

