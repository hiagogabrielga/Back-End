/*01. Crie uma função que receba uma string como
parâmetro e retorne a mesma string com todas as letras
em caixa alta.*/
import input from "readline-sync"

function caixaAlta (string){
    let strMaiuscula = string.toUpperCase()
    return strMaiuscula
}

let str = input.question("Digite qualquer coisa: ")

console.log(caixaAlta(str))