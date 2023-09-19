const prompt = require('prompt-sync')();

let prova1 = parseInt(prompt('Nota 1: '))
let prova2 = parseInt(prompt('Nota 2: '))
let prova3 = parseInt(prompt('Nota 3: '))

media1 = prova1*2;
media2 = prova2*3;
media3 = prova3*5;

let media = (media1 + media2 + media3) /10;

console.log("A média final é:",media)