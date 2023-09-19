const prompt = require('prompt-sync')();

let numA = prompt('Digite um número: ')
let numB = prompt('Digite um número: ')

let aux = numA;

numA = numB;
numB = aux;

console.log(numA , numB)