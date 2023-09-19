const prompt = require('prompt-sync')();

let velocidade = prompt("Digite a Velocidade em km/h: ")

let  converte = velocidade / 3.6;
let tempo = 435/velocidade;
let media = 435/tempo


console.log("A velocidade de Km/h para m/s será",converte)
console.log("O tempo da viagem será de",tempo,"e a média da velocidade será",media)