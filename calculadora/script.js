function operacao() {
    let numAcima = document.getElementById("tercLinTela").innerHTML;
    document.getElementById("segLinTela").innerHTML = numAcima;
    document.getElementById("tercLinTela").innerHTML = "";
    

}

function calculo() {
    let primeiraSequencia = Number(document.getElementById("segLinTela").innerHTML);
    let simbolo = document.getElementById("operadoresTela").innerText;
    let segundaSequencia = Number(document.getElementById("tercLinTela").innerHTML);

        if ( primeiraSequencia.length !== 0 && simbolo.length !== 0 && segundaSequencia.length !== 0) {


            switch (simbolo) {
                case '÷':
                    let dividir = primeiraSequencia / segundaSequencia;
                    let resultadoDiv = dividir.toFixed(2);
                    document.getElementById("tercLinTela").innerHTML = Number(resultadoDiv);
                    console.log(resultadoDiv);
                    break;

                case 'x':
                    let multiplicar = primeiraSequencia * segundaSequencia;
                    let resultadoMult = multiplicar.toFixed(2);
                    document.getElementById("tercLinTela").innerHTML = Number(resultadoMult);
                    console.log(resultadoMult);
                    break;

                case '-':
                    let subtrair = primeiraSequencia - segundaSequencia;
                    let resultadoSub = subtrair.toFixed(2);
                    document.getElementById("tercLinTela").innerHTML = Number(resultadoSub);
                    console.log(resultadoSub);
                    break;

                case '+':
                    let somar = primeiraSequencia + segundaSequencia;
                    let resultadoSom = somar.toFixed(2);
                    document.getElementById("tercLinTela").innerHTML = Number(resultadoSom);
                    console.log(resultadoSom);
                    break;
            }
            document.getElementById('primLinTela').innerHTML = primeiraSequencia + " " + simbolo + " " + segundaSequencia + " = ";
            document.getElementById("segLinTela").innerHTML = "";
            document.getElementById("operadoresTela").innerHTML = "";

        } else {
            console.log('Deu algum erro');
        }
}


function dig(a) {
    var simb = a
    
    switch (simb) {

        case '1':
            document.getElementById("tercLinTela").innerHTML += "1";
            var caixa = document.getElementById("1");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;
        case '2':
            document.getElementById("tercLinTela").innerHTML += "2";
            var caixa = document.getElementById("2");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;
        case '3':
            document.getElementById("tercLinTela").innerHTML += "3";
            var caixa = document.getElementById("3");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;
        case '4':
            document.getElementById("tercLinTela").innerHTML += "4";
            var caixa = document.getElementById("4");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;
        case '5':
            document.getElementById("tercLinTela").innerHTML += "5";
            var caixa = document.getElementById("5");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;
        case '6':
            document.getElementById("tercLinTela").innerHTML += "6";
            var caixa = document.getElementById("6");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;
        case '7':
            document.getElementById("tercLinTela").innerHTML += "7";
            var caixa = document.getElementById("7");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;
        case '8':
            document.getElementById("tercLinTela").innerHTML += "8";
            var caixa = document.getElementById("8");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;
            
        case '9':
            document.getElementById("tercLinTela").innerHTML += "9";
            var caixa = document.getElementById("9");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;

        case '0':
            document.getElementById("tercLinTela").innerHTML += "0";
            var caixa = document.getElementById("0");
            caixa.style.animation = "";
            setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
            break;

        case '÷':
            document.getElementById("operadoresTela").innerHTML = "÷";
            operacao();
            break;

        case 'x':
            document.getElementById("operadoresTela").innerHTML = "x";
            operacao();
            break;

        case '-':
            document.getElementById("operadoresTela").innerHTML = "-";
            operacao();
            break;

        case '+':
            document.getElementById("operadoresTela").innerHTML = "+";
            operacao();
            break;
    }
   
    
}
    
function myFunctionC() {
        
    document.getElementById("tercLinTela").innerHTML = "";
    document.getElementById("operadoresTela").innerHTML = "";
    document.getElementById("segLinTela").innerHTML = "";
    document.getElementById("primLinTela").innerHTML = "Histórico";
};

document.addEventListener("keydown", function(event) {
    var tecla = event.keyCode;

    switch (tecla) {
        case 96:
            dig('0');
            break;
        case 97:
            dig('1');
            break;
        case 98:
            dig('2');
            break;
        case 99:
            dig('3');
            break;
        case 100:
            dig('4');
            break;
        case 101:
            dig('5');
            break;
        case 102:
            dig('6');
            break;
        case 103:
            dig('7');
            break;
        case 104:
            dig('8');
            break;
        case 105:
            dig('9');
            break;
        case 111:
            dig('÷');
            break;
        case 106:
            dig('x');
            break;
        case 109:
            dig('-');
            break;
        case 107:
            dig('+');
            break;
        case 13:
            calculo();
            break;
        case 8:
            myFunctionC();
            break;0
    };
    
    console.log(event.key)
    console.log(event.keyCode);


});


/*botaoAnimar.addEventListener("click", ()=> {
  caixa.style.animation = "";
  setTimeout(() => caixa.style.animation = "jello-horizontal 0.9s both", 5);
});*/

