function validaCPF(cpf){
    cpf = cpf.replace(/\.|-/g,"");
    console.log(`CPF sem caracteres ${cpf}`);

    if (cpf.length != 11 || 
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
        ){
            return false;
        } else {


        console.log('verificando cpf: '+ cpf)
          numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);
        var soma = 0;

        for(var i = 10; i > 1; i--){
             soma += numeros.charAt(10 - i) * i;
        }

        console.log(soma);
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        console.log(`Valor do 1º digito verificador: ${resultado}.`);

        if(resultado != digitos.charAt(0)){
            return false;
        }

        soma = 0;
        var numeros = cpf.substring(0,10);
        for(var k = 11; k > 1; k--){
             soma = soma + numeros.charAt(11 - k) * k;
        }
        console.log(soma);
        
        //verificador do 2º digito
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        console.log(`O valor do 2º digito verificador é: ${resultado}`);
        if(resultado != digitos.charAt(1)){
            return false
        }

        return true;
    }
}

function verificarCPF(cpf){
    
    let respCPF = document.querySelector('p#respCPF');
    console.log('Verificando cpf digitado...')
    respCPF.innerHTML = '';
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadoValidação = validaCPF(cpf);

    if(resultadoValidação){
        console.log('cpf valido');
        respCPF.innerHTML = `\u{2705}`
        alert('\u{2705} CPF OK!')
    }else{
        console.log('CPF inválido')
        respCPF.innerHTML = `\u{274C}`
        alert('\u{274C} [ERRO] Digite novamente seu CPF!')
    }
}

//Verificar se o cpf está correto pra prosseguir com o envio
function envioCPF(){
    let cpfTeste = document.getElementById('cpf_digitado').value;
    let resultado_cpf = validaCPF(cpfTeste);
    
    if(resultado_cpf != true){
        return alert('[ERRO] Dados inseridos incorretamente!')
    }else{
        
        return alert("Formulário Enviado com sucesso!!!")
    }
}



function mascara_cpf(){
    var cpf = document.getElementById('cpf_digitado')
    if(cpf.value.length == 3 || cpf.value.length == 7){
       cpf.value += '.';
    }else if(cpf.value.length == 11){
       cpf.value += '-';
    }
}