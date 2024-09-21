//INTRODUÇÃO AO EVENT LOOP 

//trabalhando com operação de callbacks
console.log('primeiro texto');

//excutar a operação no fim de 5 segundos
setTimeout(() => {
    console.log('terceiro texto');
}, 5000);

console.log('segundo texto');

//executar a opração a cada 2 segundos
setInterval(() => {
    console.log('segundo texto');
}, 2000);

console.log('outro yexto');




