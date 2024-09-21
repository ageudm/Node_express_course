//MODULO QUE PERMITE A LEITURA DE CONTEUDOS
const {readFileSync, writeFileSync, readFile, writeFile } = require('fs'); //Importar os metodo

//FAZER A LEITURA DO CONTEUDO DE FORMA SYNCRONA
const texto = readFileSync('./content/subfolder/text.txt', 'utf8');
console.log(texto);

//CRIAR UM NOVO ARQUIVO COM O CONTEUDO DE FORMA SYNCRONA
const criateNew = writeFileSync('./content/subfolder/new-file.txt', 
    `Angola é um pais lindo para viver : ${texto}`);

//ler o conteudo do novo arquivo
const readInfo = readFileSync('./content/subfolder/new-file.txt', 'utf8');
console.log(readInfo);


//LER E CRIAR CONTEUDO SEM O METODO SYNCRONO APLICANDO ANALISE DE ERRO
const readContent = readFile('./content/subfolder/text.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const resultData = result;
    writeFile('./content/subfolder/new-file2.txt',`Informaçõ do file 2: ${resultData}`, (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(result);
    });

});


