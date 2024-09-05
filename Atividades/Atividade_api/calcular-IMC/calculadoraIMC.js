function efetuarCalculoIMC(peso, altura){
    let imc = peso / (altura * altura)

    return imc.toFixed(2);
}

function retornarSatusIMc(imc)
{
    let status;
    if(imc < 18.5) 
    {
        status = "Abaixo do peso";
        
    }else if(imc >= 18.5 && imc < 24.9) 
    {
        status = "Peso Normal";
    }else if(imc >= 300) 
    {
        status = "Você é um planeta?";
    }
    else if(imc != null)
    {
        status="Obeso";
    }
    else{
        status="Não foi possivel fazer a operação de status.";
    }

    return status
}

function validacao(parametro){
    if(isNaN(parametro)){
        return false;
    } else {
        return true;
    }
}

exports.validacao = validacao;
exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornarSatusIMc = retornarSatusIMc;