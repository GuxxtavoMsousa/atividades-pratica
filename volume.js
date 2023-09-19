const prompt = require('prompt-sync')();

let altura = prompt('Digite a altura (cm): ')
let largura = prompt('Digite a largura (cm): ')
let profundidade = prompt('Digite a profudindade (cm): ')

let volume = altura * largura * profundidade;

console.log("O volume da caixa d'agua é:",volume)