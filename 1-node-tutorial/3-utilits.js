const sayHelo = (name) => {
    console.log(`Ola senhor ${name}`);
}

const soma = (num1, num2) => {
    console.log(num1 + num2);
}

//dados excutados
const lerIdade = (num) => {
    console.log(`a minha idade é: ${num}`);
}; lerIdade(20)

module.exports = sayHelo, soma; //para exporatação de fução os elementos devem ser separado com virgulas