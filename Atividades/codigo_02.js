//exer01
var apartamento = {
    quarto: 2,
    tipo: "apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7,
};
console.log(`${apartamento.tipo} com ${apartamento.quarto} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}.`);

//exer 02
var produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00,
};
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}kg, está à venda por R$ ${produtoEmbalado.preco}`);

//exer 03
class Imovel{
    quartos;
    tipo;
    endereco;
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizado em ${this.endereco}.`
    }
}


const Casa = new Imovel();
Casa.quartos =  4;
Casa.tipo = "Casa";
Casa.endereco = "Rua da Amizade, 789 - Bairro Alegre";
console.log(Casa.exibirInformacoes())

const Apartamento = new Imovel();
Apartamento.quartos =  2;
Apartamento.tipo = "Apartamento";
Apartamento.endereco = "Avenida da Paz, 123 - Centro";
console.log(Apartamento.exibirInformacoes())


//exer 04
class Veiculo{
    marca;
    modelo;
    ano;
    exibirDetalhes(){
        return `${this.marca} do modelo ${this.modelo} do ano ${this.ano}`
    }
}
const Carro = new Veiculo();
Carro.marca = "Toyota"
Carro.modelo =  "Corolla"
Carro.ano = 2022
console.log(Carro.exibirDetalhes())

const Motocicleta = new Veiculo();
Motocicleta.marca = "Honda"
Motocicleta.modelo = "CBR 600RR"
Motocicleta.ano = 2021
console.log(Motocicleta.exibirDetalhes())