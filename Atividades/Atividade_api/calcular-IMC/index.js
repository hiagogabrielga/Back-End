const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    if(calculadoraIMC.validacao(req.query.peso) && calculadoraIMC.validacao(req.query.altura)){
        let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
        let status = calculadoraIMC.retornarSatusIMc(imc);
        let json = {imc: imc, status: status};
        res.json(json);
    }else {
        res.status(400).json({"Erro": "Algum valor inválido nessa porra"});
    }
    
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data)
})