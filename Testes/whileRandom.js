import cd from "readline-sync"

let numeroR = ((Math.random(100)) * 100).toFixed(0);
do {
    let numero = cd.questionInt("Adivinhe o número entre 1 e 100: ");
    if (numero != numeroR) {
        console.log(numeroR < numero ? "Você escoleu um numéro maior" : "você digitou um número menor")
    }
    else console.log("Você acertou seu otário.")
} while (numero != numeroR);



