/*03. Crie uma função que receba dois números como
parâmetros e retorne a soma deles. */
import input from "readline-sync"

function soma (n1, n2){
    let soma = n1 +n2
    return `A soma de ${numero1} + ${numero2} = ${soma}`
};

let numero1 = input.questionInt("Digite o primeiro número: ");
let numero2 = input.questionInt("Digite o segundo número: ");

console.log(soma(numero1, numero2))