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


    var container312 = document.querySelector('.container312');
    var container322 = document.querySelector('.container322');
    var container332 = document.querySelector('.container332');
    var luzTeto = document.querySelector('#bttnTeto');
    var luzPia = document.querySelector('#bttnPia');
    var energiaForFog = document.querySelector('#bttnFog');
    var energiaExaust =document.querySelector('#bttnExaust');


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

    async function primeiroPasso() {
        await espera3s();
        nomeCozinha.classList.toggle('activeCozinha');
        nomeCozinha.classList.toggle('animedCozinha');
        svg.classList.toggle('animedsvgCozinha');
        await espera3s();
        central.classList.toggle('activeCentral');
        svg.classList.toggle('animedsvgCozinha');
        await espera1s();
        quarto.classList.toggle('activeQuarto');
        await espera1s();
        sala.classList.toggle('activeSala');
        await espera1s();
        banheiro.classList.toggle('activeBanheiro');
        await espera1s();
        lavanderia.classList.toggle('activeLavanderia');
    }



    switch (oper) {
        case 'menu':
            menuToggle.classList.toggle('activeMenu');
            cozinha.classList.toggle('activeCozinhaCentral');
            nomeCozinha.classList.toggle('animedCozinha');
            primeiroPasso();
            //quarto.classList.toggle('activeQuarto');
            //sala.classList.toggle('activeSala');
            //banheiro.classList.toggle('activeBanheiro');
            //lavanderia.classList.toggle('activeLavanderia');



            console.log('deu certo');            
        break;

        case 'ilum':
            container312.style.display = 'flex';
            container322.style.display = 'none';
            container332.style.display = 'none';
        break;
        case 'forn':
            container312.style.display = 'none';
            container322.style.display = 'flex';
            container332.style.display = 'none';
        break;
        case 'exaus':
            container312.style.display = 'none';
            container322.style.display = 'none';
            container332.style.display = 'flex';
        break;

        case 'teto':
            luzTeto.classList.toggle('activeTeto');
            console.log('deu certo');
        break;

        case 'pia':
            luzPia.classList.toggle('activePia');
            console.log('deu certo');
        break;

        case 'enerForFog':
            energiaForFog.classList.toggle('activeForFog');
            console.log('deu certo');
        break;

        case 'ligExaust':
            energiaExaust.classList.toggle('activeExaust');
            console.log('deu certo');
        break;




    }

}