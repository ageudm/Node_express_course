****************************
NOTAS
*****************************

NODE & EXPRESS

NOTAS PARA PESQUISAS
commonJS
dirname
filename
require
module
process
Promise
Async
Event
Streams
Middlaware

NOTAS DE ESTUDO
==========================================================
//GLOBALS - NO WINDOWS

// __dirname - path to curent director
// __filename - file name
// riquire - function to use modules (commonJS)
// module - infon about curent module (file)
// process - info about env whre the program is being executed


MODULOS GLOBAL
===============================================================
OS = modulo para interação co o sistema
PATH
FS
HTTP
-------------------------------------------------------------

NPM INSTAL
-----------------------------------------------------------
npm install = instala as dependecias global
npm i nomedopacote = instala uma pacote ou dpendencia especifica
EX: npm i bootstrap = instala as dependecias do pacote bootrap

NPM INIT
----------------------------------------------------------
npm init = instalação do pacote json para gestaão de dados de configuraçã do projecto

NPM INSTAL -G
---------------------------------------------------------------
npm install -g <packagename> = instalar um pacote especifico

INSTALAÇÃO DO NODEMON
--------------------------------------------------------------
npm i nodemon -D = instala as dependecia que permite a automação de excução das alterações no projecto

CONFIGURAÇÃO DO PACOTE NODEMON NO PACKAGE.JSON
--------------------------------------------
 "scripts": {
    "start": "nodemon app.js",
    "dev": "nodemon app.js"
  },

  EXECUÇÃO DO NODEMON NO TERMINAL
  --------------------------------------------
  npm run dev: automatisa o processo de execução do codigo
  --------------------------------------------
  npm start: automatisa o processo de execução do codigo




HTTP BASICO
----------------------------------------------------------------------------------------------------------------------------------
Um servidor basico com node depende dos seguintes parametro como estrutura inicial ou padrão

REQUISIÇÃO DO MODULO HTTP: const http = require('http')
-------------------------------------
CRIAÇÃO DO SEVIDOR: const server = http.createServer((req, res) => {....})
-----------------------------------
PUBLICAÇÃO DO SEVIDOR: sever.listen(5000)
-----------------------------------
PARAMETRO REQ: requisitainformação do srvidor
---------------------------------
PARAMETRO RES: le a informaçã para o usuario
---------------------------------

ADD PAGINA AO SEVIDOR
----------------------------------------------------------------------------------------------------------------------------------
MODUDO FS COM O METODO READFILESYNC: para permitir a importação do documento a ser carregado
----------------------------------------



INICIAR SERVIDOR COM EXPRESS
-----------------------------------------------------------------------------------------------------------------------
IMPOLRTAR O MODULO: const express = require('express')
DECLARAR O METODO: const app = express();
INICIAR O SEVIDOR: app.listen(5000, () => {....})





