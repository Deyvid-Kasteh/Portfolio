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
            receber.innerHTML = (`<p>${arrSrt.toString()}</p>`)
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
    bolas.innerHTML = " "
    let response = await fetch(URl)
    let data = await response.json()
    let resultadosTodos = await data.map(dezen => dezen.dezenas)
    //let primeiroResultado = await resultadosTodos[0].join(" ")
    let resultadosForEach = await resultadosTodos[0]
    
    return resultadosForEach.forEach(element => {
        const elemento = document.createElement("div")
        elemento.setAttribute("class", "bola");
        elemento.innerHTML = `${element}`
        bolas.appendChild(elemento)
    });


    //element.setAttribute("class", "democlass");
    //let resultString = await primeiroResultado.toString()

    //return resultadosForEach
    
    //containerResultado.innerHTML = `<p>os números são ${primeiroResultado}</p>`
}






//buscarResultadoLatest()



    /*


for (let i = 0; i < resultadoTotal.length; i++) {
            let contador = i
            console.log(`Esse é o jogo de numero ${contador}`);
            
        }


for (let k = 0; k < resultadoTotal[i].length; k++){
                console.log(resultadoTotal[i][k])}





*/