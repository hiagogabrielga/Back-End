const express = require('express');
const app = express();

let data = new Date();

app.get('/', (req, res) => {
    let pessoa = ({nome: 'João Pedro Bento De Andrade', atributos: 'Ele é Legal', disse: 'Hello word!'})
    res.json(pessoa);
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
});
