const http = require('http');
const {readFileSync} = require('fs');

//CARREGAR O DOCUEMNTO
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeBrowserApp = readFileSync('./navbar-app/browser-app.js')

//CRIAR O SEVIDOR
const server = http.createServer((req, res) => {
    //REQUISITAR A URL
    const url = req.url;

    //PAGINA INICIAL
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    } 
    //PAGINA ABOUT
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'}) 
        res.write('<h2>About page</h2>') 
        res.end() 
    }
    //ESTILO
    else if(url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'}) 
        res.write(homeStyle) 
        res.end() 
    } 
    //LOGOTIPO
    else if(url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'}) 
        res.write(homeLogo) 
        res.end() 
    } 
    //SCRIPT
    else if(url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'}) 
        res.write(homeBrowserApp) 
        res.end() 
    } 
    else {
        res.writeHead(404, {'content-type': 'text/html'}) 
        res.write('<h2>Page not found</h2>') 
        res.end() 
    }
})


//PUBLICAR O SERVIDOR
server.listen(5000)
