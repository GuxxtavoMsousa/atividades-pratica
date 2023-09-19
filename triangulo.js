const prompt = require('prompt-sync')();

let base = prompt("Digite a base (cm): ")
let altura = prompt("Digite a altura (cm): ")

let triangulo = base*altura/2;

console.log('A área do triângulo é:',triangulo)