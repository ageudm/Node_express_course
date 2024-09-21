const EventEmitter = require('events');

//Criar uma instancia do objecto EventEmitter
const customEmitter = new EventEmitter();

//Listar um evento com a prop on
customEmitter.on('response', () => {
    console.log('Um evento aconteceu');
})

//Listar um evento e aplicar parametro na função
customEmitter.on('response', (nome, idade) => {
    console.log(`O meu nome é: ${nome} e a minha idade e: ${idade} anos`);
})

//Emitir o evnto com a prop emit
customEmitter.emit('response', 'Ageu Miguel', 31)
