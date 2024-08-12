const express = require('express');
const app = express();

let data = new Date();

app.get('/', (req, res) => {
    res.send('Hello word!');
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
});
