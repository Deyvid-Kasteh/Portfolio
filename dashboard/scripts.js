
function abrir(a) {
    var oper = a

    var menuToggle = document.querySelector('#menuToggle');
    var central = document.querySelector('#central');
    var cozinha = document.querySelector('#cozinha');
    var nomeCozinha = document.querySelector('#nomeCozinha');
    var svg = document.querySelector('#svgCozinha');
    var quarto = document.querySelector('#quarto');
    var sala = document.querySelector('#sala');
    var banheiro = document.querySelector('#banheiro');
    var lavanderia = document.querySelector('#lavanderia');



    var checkboxIluminacao = document.getElementById("iluminacaoCheckbox");
    var checkboxForFog = document.getElementById("ForFogCheckbox");
    var checkboxExaustor = document.getElementById("ExaustorCheckbox");



    function espera3s(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('esperando a animação acontecer');
                resolve()
            }, 3000);
        })
    }
    function espera1s(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('esperando a animação acontecer');
                resolve()
            }, 1000);
        })
    }

    function esperameioS(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('esperando a animação acontecer');
                resolve()
            }, 500);
        })
    }

    function esperameio02S(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('esperando a animação acontecer');
                resolve()
            }, 200);
        })
    }

    function esperameio35S(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('esperando a animação acontecer');
                resolve()
            }, 350);
        })
    }

    async function primeiroPasso() {
        await esperameioS();
        nomeCozinha.classList.toggle('activeCozinha');
        nomeCozinha.classList.toggle('animedCozinha');
        svg.classList.toggle('animedsvgCozinha');
        await esperameioS();
        central.classList.toggle('activeCentral');
        svg.classList.toggle('animedsvgCozinha');
        await esperameio02S();
        quarto.classList.toggle('activeQuarto');
        await esperameio02S();
        sala.classList.toggle('activeSala');
        await esperameio02S();
        banheiro.classList.toggle('activeBanheiro');
        await esperameio02S();
        lavanderia.classList.toggle('activeLavanderia');
    }



    switch (oper) {
        case 'menu':

            if (menuToggle.classList.contains('activeMenu')) {
                //  fechado //
                menuToggle.classList.toggle('activeMenu');
                nomeCozinha.classList.remove('activeCozinha');
                nomeCozinha.classList.remove('animedCozinha');
                svg.classList.remove('animedsvgCozinha');
                svg.classList.remove('animedsvgCozinha');
                lavanderia.classList.remove('activeLavanderia');
                banheiro.classList.remove('activeBanheiro');
                sala.classList.remove('activeSala');
                quarto.classList.remove('activeQuarto');
                central.classList.remove('activeCentral');


              } else {
                menuToggle.classList.toggle('activeMenu');
                cozinha.classList.toggle('activeCozinhaCentral');
                nomeCozinha.classList.toggle('animedCozinha');
                primeiroPasso();
              }



            console.log('deu certo');            
        break;

        case 'ilum':
            if (document.getElementById("iluminacaoCheckbox").checked == false )
            {
                document.getElementById("ForFogCheckbox").checked = false;
                document.getElementById("ExaustorCheckbox").checked = false;
            }
        break;



        case 'forn':
            if (document.getElementById("ForFogCheckbox").checked == false )
            {
                document.getElementById("iluminacaoCheckbox").checked = false;
                document.getElementById("ExaustorCheckbox").checked = false;
            }
        break;
        case 'exaus':
            if (document.getElementById("ExaustorCheckbox").checked == false )
            {
                document.getElementById("ForFogCheckbox").checked = false;
                document.getElementById("iluminacaoCheckbox").checked = false;
            }
        break;
    }

}
