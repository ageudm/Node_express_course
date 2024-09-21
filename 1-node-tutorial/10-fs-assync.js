const { readFile, writeFile } = require('fs');
const util = require('util');

//Usar o metodo async com o objecto util para criar uma promise
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);



//CRIAR UMA FUÇÃO QUE RETORN UMA PROMISSE
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

//Fazer leitura da informação do aquivo encotrado
// getText('./content/subfolder/text.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err));

// getText('./content/subfolder/new-file.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err));

//Fazer a leitura com o metodo async
// const start = async () => {
//     const first = await getText('./content/subfolder/new-file2.txt')
//     console.log(first);
// }

// start();


// //Aplicando a anlise de erro no metodo async com try catch
// const start2 = async () => {
//     try {
//         const first2 = await getText('./content/subfolder/text.txt')
//         const first3 = await getText('./content/subfolder/new-file.txt')
//         console.log(first2);
//         console.log(first3);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start2();

// criar um novo arquivo e add texto de outros documentos
const start3 = async () => {
    try {
        const first2 = await readFilePromise('./content/subfolder/text.txt', 'utf8')
        const first3 = await readFilePromise('./content/subfolder/new-file.txt', 'utf8')
        await writeFilePromise('./content/subfolder/texto-novo.txt', `NOVO ARQUIVO CRIADO COM O TEXTO: ${first2} E O TEXTO ${first3}`)
        console.log(first2, first3);
    } catch (error) {
        console.log(error);
    }
}

start3();

