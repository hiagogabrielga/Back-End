/*02. Crie uma função que receba um número como
parâmetro e verifique se ele é par ou ímpar. Retorne uma
string. */
import input from "readline-sync"

function examinador (numero) {
    return numero[numero.length - 1]%2 == 0 ? "Par" : "ímpar"
}; 


let valorNumerico = input.question("Digite qualquer número: ")

console.log(examinador(valorNumerico))