import cd from "readline-sync"

let numero = cd.questionInt("Digite um número par tábuada: ");
console.log(`A tábuada do número ${numero} é: `)
let cont = 0
while (cont<=10 ) {
    let resultado = numero*cont
    console.log(numero, "X", cont, "=", resultado)
    cont++
}

