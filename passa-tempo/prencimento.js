//Me desafiei a fazer um código que recebece 3 valores e organizace esses valores em ordem crescente e caso tiver um espaço entre os números o código prencha 
//EX: código recebeu 2, 4 e 6 ele retorna 2, 3, 4, 5 e 6.
import input from "readline-sync"

function receberDados() {
    var listaNumeros = [];
    for (let index = 1; index <= 3; index++) {
        var numero = input.questionInt(`Digite o seu ${index}° número: `);
        listaNumeros[index-1] = numero
    };
    return listaNumeros.sort()
}

function prencherDados(lista) {
    var primeiroNumero = lista[0]
    var ultimoNumero = lista[2]
    for (let index = 1; index <= ultimoNumero-primeiroNumero; index++) {
        lista[index] = primeiroNumero+index
    }
    console.log(lista)
}

var dados = receberDados()
prencherDados(dados)