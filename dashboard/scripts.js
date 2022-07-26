function abrir(a) {
    var oper = a

    
    var container312 = document.querySelector('.container312');
    var container322 = document.querySelector('.container322');
    var container332 = document.querySelector('.container332');
    var luzTeto = document.querySelector('#bttnTeto');
    var luzPia = document.querySelector('#bttnPia');
    var energiaForFog = document.querySelector('#bttnFog');
    var energiaExaust =document.querySelector('#bttnExaust');


    switch (oper) {
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