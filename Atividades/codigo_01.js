/*1*/
console.log("\nQuestão 01\n")
var nome = "Hiago Gabriel";
var idade = 16;
console.log("Olá, meu nome é",nome,"e eu tenho ",idade, "anos.")


/*2*/
console.log("\nQuestão 02\n")
console.log("O rato reu a roupa do rei de Rôma","\nO rato reu a roupa do rei de Rôma".toUpperCase());

/*3*/
console.log("Questão 03\n")
var variavel = 15;
console.log("A variavel é do tipo:",typeof(variavel));

/*4*/
console.log("\nQuestão 04\n")
var altura = 1.78;
var peso = 72;
console.log("Seu Imc é de:",peso/(altura*altura));

/*5*/
console.log("\nQuestão 05\n")
var numero1 = 20;
var numero2 = 34;
var soma = numero1 + numero2;
var subtracao = numero1 - numero2;
var divisao = numero1 / numero2;
var multiplicasao = numero1 * numero2;
console.log("Soma:",numero1,"+",numero2,"=",soma,"\nSubtração:",numero1,"-",numero2,"=",subtracao,"\nDivisão:",numero1,"/",numero2,"=",divisao,"\nMultiplicação:",numero1,"X",numero2,"=",multiplicasao);

/*6*/
console.log("\nQuestão 06\n")
var pessoa1 = 18;
var pessoa2 = 23;
if (pessoa1 > pessoa2)
    console.log('Pessoa 1 é mais Velha');
else
    console.log('Pessoa 2 é mais velha');

/*7*/
console.log("\nQuestão 07\n")
/*Jeito Com If*/
var anos = 18
if (anos >= 18)console.log('Maior de idade');
else console.log('menor de idade');

/*Jeito com ternário*/
console.log(anos >= 0 ? "Maior de idade" : "menor de idade");

/*8*/
console.log("\nQuestão 08\n")
/*Jeito Com If*/
var numero_qualquer = 19
if(numero_qualquer%2==0){
    console.log('Número par.')
}
else{
    console.log('Número ímpar.')
}
/*Jeito com ternário*/
console.log(numero_qualquer%2 == 0 ? "Número par" : "Número Ímpar");
