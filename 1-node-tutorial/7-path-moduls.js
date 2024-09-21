// MODULO QUE PERMITE TRABALHAR COM CAMINHOS DE AQUIVOS E DIREITORIO
//==================================================================

const path = require('path');

console.log(path.sep); //leitura do direitoeio home

//ADD CAMINHO DE ARQUIVO COM O METODO JOIN
const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);

//BUSCAR APENAS O ARQUIVO COM O BASENAME
const base = path.basename(filePath);
console.log(base);

//ADD CAMINHO DE AQUIVO APRTIR DA RAIS DO DISCO COM O RESOLVE
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);

//IDENTIFICAR O NOME DA PASTA ONDE SE ENCOTRA O ARQUIVO
const localFile = path.dirname('/content/subfolder/text.txt');
console.log(localFile);

//PEGAR A EXTENÇÃO DE UM ARQUIVO
const extencionName = path.extname('index.html');
console.log(extencionName);