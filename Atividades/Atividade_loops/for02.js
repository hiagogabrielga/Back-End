/*Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o 
valor de imposto de renda a ser pago.
Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
Salário <= R$ 2.100,00 = isento
Salário <= R$ 2.800,00 = 7,5%
Salário <= R$ 3.750,00 = 15%
Salário <= R$ 4.660,00 = 22.5%
Salário > R$ 4.660,00 = 27.5% */
import cd from "readline-sync"

for (let cont = 1; cont < 10; cont++) {
    let nome = cd.question("Digite seu nome: ")
    let salario = cd.questionInt("Digite seu sálario bruto: ")
    
    if (salario <= 2.100) {
        console.log("Sei la")
    } else {
        
    }

}