const URl = "https://loteriascaixa-api.herokuapp.com/api/lotofacil"

const latest = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest"

let containerResultado = document.querySelector(".resultados")
let bolas = document.querySelector(".bolas")
let inputPremio = document.querySelector("#inputPremio")
let input15pts = document.querySelector("#input15pts")
let input14pts = document.querySelector("#input14pts")
let input13pts = document.querySelector("#input13pts")
let input12pts = document.querySelector("#input12pts")
let input11pts = document.querySelector("#input11pts")
let quadro = document.querySelector(".quadro")
let dEscolhidasNum = document.querySelector('.dEscolhidasNum')
let conteinerBottom = document.querySelector('.conteinerBottom')

let arr15 = []
let arr15value = []


quadro.addEventListener('click', e => {
        // console.log(e.target.id)
        //---------------------///
        const lor = e.target
        const lore = e.target.classList
        const loreId = e.target.id
        const loreValue = e.target.value
        const loreQuery = document.querySelector(`#${loreId}`)

        if (arr15.length < 15) {

            if (!lore.contains('clickedDez')) {
                loreQuery.classList.add('clickedDez')
                arr15.push(loreId)
                arr15value.push(loreValue)
                dEscolhidasNum.innerHTML = arr15.length
                //-----------------------//
                console.log(arr15)
                console.log(arr15.length)
                console.log(loreValue)
            } else {
                loreQuery.classList.remove('clickedDez')
                arr15.splice(arr15.indexOf(loreId), 1)
                arr15value.splice(arr15value.indexOf(loreValue), 1)
                dEscolhidasNum.innerHTML = arr15.length
                //-----------------------//
                console.log(arr15)
                console.log(arr15value)
                console.log(arr15.length)
                console.log(arr15value.length)
            }
        } else if (lore.contains('clickedDez')) {  
            loreQuery.classList.remove('clickedDez')
            arr15.splice(arr15.indexOf(loreId), 1)
            arr15value.splice(arr15value.indexOf(loreValue), 1)
            dEscolhidasNum.innerHTML = arr15.length
            //-----------------------//
            console.log(arr15)
            console.log(arr15value)
            console.log(arr15.length)
            console.log(arr15value.length)
        }
    })

    conteinerBottom.addEventListener('click', e => {
        const lore2 = e.target.classList
        //console.log(lore2)
        if (lore2.contains('limparDezEscolhidas')) {
            arr15.map( function(elem) {
                let pickedNum = document.querySelector(`#${elem}`)
                pickedNum.classList.remove('clickedDez')
                return console.log(elem)
            })
            arr15 = []
            arr15value = []
            dEscolhidasNum.innerHTML = arr15.length
            console.log('catch')
            console.log(arr15value.length)

        } else if (lore2.contains('enviarDezEscolhidas') && arr15.length == 15) {
            let receber = document.querySelector('.receber')
            let arrSrt = arr15value.sort()
            arrSrt.forEach(element => {
                const bolaEscolhida = document.createElement("div")
                bolaEscolhida.setAttribute("class", "bolaEscolhida");
                bolaEscolhida.innerHTML = `${element}`
                receber.appendChild(bolaEscolhida)
            });
            //receber.innerHTML = (`<p>${arrSrt.toString()}</p>`)
            console.log('foi')
        }

    })



    






async function buscarResultadoLatest() {
    bolas.innerHTML = " "
    let response = await fetch(latest);
    let data = await response.json();
    let resultadosData = await data.data;
    let resultadosForEachLatest = await data.dezenas


    // colocar valores
    let vencedores15 = data.premiacoes[0].vencedores
    if (vencedores15 > 0)
    {
        let premio15Puro = data.premiacoes[0].premio
        let premio15 = premio15Puro.replace(",", ".")
        let premioTotal = vencedores15 * premio15
        console.log(premio15)
        console.log(premioTotal)
    }
    else {
        inputPremio.innerHTML = "ACUMULOU";
        input15pts.innerHTML = "Nenhum";
    }


    let vencedores14 = data.premiacoes[1].vencedores
    let premio14Puro = data.premiacoes[1].premio
    input14pts.innerHTML = premio14Puro


    let vencedores13 = data.premiacoes[2].vencedores
    let premio13Puro = data.premiacoes[2].premio
    input13pts.innerHTML = premio13Puro

    let vencedores12 = data.premiacoes[3].vencedores
    let premio12Puro = data.premiacoes[3].premio
    input12pts.innerHTML = premio12Puro
    
    let vencedores11 = data.premiacoes[4].vencedores
    let premio11Puro = data.premiacoes[4].premio
    input11pts.innerHTML = premio11Puro



//colocar data
    let inputData = document.querySelector("#inputData");
    inputData.setAttribute("class", "dataDoSorteio");
    inputData.innerHTML = `${resultadosData}`;
    console.log(data)
    console.log(vencedores15)
    
    

    return resultadosForEachLatest.forEach(element => {
        const elementoBola = document.createElement("div")
        elementoBola.setAttribute("class", "bola");
        elementoBola.innerHTML = `${element}`
        bolas.appendChild(elementoBola)
        

    });
}





//premiacoes: Array(5)
//0: {acertos: '15 Pontos', vencedores: 2, premio: '771.473,59'}












async function buscarResultado() {
    let response = await fetch(URl)
    let data = await response.json()
    let resultadosTodos = await data.map(dezen => dezen.dezenas)
    //let primeiroResultado = await resultadosTodos[0].join(" ")

    let arrDeTeste = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15']

    const arrDeTeste01 = new Array

    let resultadosForeach = await resultadosTodos.forEach( elekent => {
        
        const arrDeTesteFinal = new Array()

        elekent.forEach( ele => {

            //const arrDeTesteFinal = new Array()

        if ( ele.includes(arrDeTeste[0])) {
            arrDeTesteFinal.push(arrDeTeste[0])
        }
        
        if (ele.includes(arrDeTeste[1])) {
            arrDeTesteFinal.push(arrDeTeste[1])
        }

        if (ele.includes(arrDeTeste[2])) {
            arrDeTesteFinal.push(arrDeTeste[2])
        }

        if (ele.includes(arrDeTeste[3])) {
            arrDeTesteFinal.push(arrDeTeste[3])}

        if (ele.includes(arrDeTeste[4])) {
            arrDeTesteFinal.push(arrDeTeste[4])
        }

        if (ele.includes(arrDeTeste[5])) {
            arrDeTesteFinal.push(arrDeTeste[5])
        }

        if (ele.includes(arrDeTeste[6])) {
            arrDeTesteFinal.push(arrDeTeste[6])
        }

        if (ele.includes(arrDeTeste[7])) {
            arrDeTesteFinal.push(arrDeTeste[7])
        }

        if (ele.includes(arrDeTeste[8])) {
            arrDeTesteFinal.push(arrDeTeste[8])
        }

        if (ele.includes(arrDeTeste[9])) {
            arrDeTesteFinal.push(arrDeTeste[9])
        }

        if (ele.includes(arrDeTeste[10])) {
            arrDeTesteFinal.push(arrDeTeste[10])
        }

        if (ele.includes(arrDeTeste[11])) {
            arrDeTesteFinal.push(arrDeTeste[11])
        }

        if (ele.includes(arrDeTeste[12])) {
            arrDeTesteFinal.push(arrDeTeste[12])
        }

        if (ele.includes(arrDeTeste[13])) {
            arrDeTesteFinal.push(arrDeTeste[13])
        }

        if (ele.includes(arrDeTeste[14])) {
            arrDeTesteFinal.push(arrDeTeste[14])
        }

        
    })
    arrDeTeste01.push(arrDeTesteFinal)
})

    let passo02 = await arrDeTeste01.filter( eli => eli.length > 12 )

    return console.log(passo02)

    
}



buscarResultado()



// test cases
const str1 = 'hi hello, how do you do?';
const str2 = 'regular string';
const str3 = 'hello there';

// do the test strings contain these terms?
const conditions = ["hello", "hi", "howdy"];

// run the tests against every element in the array
const test1 = conditions.some(el => str1.includes(el));
const test2 = conditions.some(el => str2.includes(el));
// strictly check that contains 1 and only one match
const test3 = conditions.reduce((a,c) => a + str3.includes(c), 0) == 1;

// display results
//console.log(`Loose matching, 2 matches "${str1}" => ${test1}`);
//console.log(`Loose matching, 0 matches "${str2}" => ${test2}`);
//console.log(`Exact matching, 1 matches "${str3}" => ${test3}`);







































    /*


for (let i = 0; i < resultadoTotal.length; i++) {
            let contador = i
            console.log(`Esse é o jogo de numero ${contador}`);
            
        }


for (let k = 0; k < resultadoTotal[i].length; k++){
                console.log(resultadoTotal[i][k])}





*/