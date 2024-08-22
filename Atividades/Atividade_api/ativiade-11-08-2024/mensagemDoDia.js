let dados = require('./dados');

function retornarMensagemDoDia() {
    return dados.frases[ Math.floor(Math.random() * (30)) +1];
};
exports.retornarMensagemDoDia = retornarMensagemDoDia;
