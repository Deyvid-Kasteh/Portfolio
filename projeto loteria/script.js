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
const receber = document.querySelector('.receber')
const receber15pontos = document.querySelector('.receber15pontos')
const receber14pontos = document.querySelector('.receber14pontos')
const receber13pontos = document.querySelector('.receber13pontos')
const receber12pontos = document.querySelector('.receber12pontos')
const receber11pontos = document.querySelector('.receber11pontos')
const textoPontosinputs15 = document.querySelector('.textoPontosinputs15')
const textoPontosinputs14 = document.querySelector('.textoPontosinputs14')
const textoPontosinputs13 = document.querySelector('.textoPontosinputs13')
const textoPontosinputs12 = document.querySelector('.textoPontosinputs12')
const textoPontosinputs11 = document.querySelector('.textoPontosinputs11')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F2E857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`

const svgMoney = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F2E857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`


const qtGanhadores15 = document.querySelector('.qtGanhadores15')
const qtGanhadores14 = document.querySelector('.qtGanhadores14')
const qtGanhadores13 = document.querySelector('.qtGanhadores13')
const qtGanhadores12 = document.querySelector('.qtGanhadores12')
const qtGanhadores11 = document.querySelector('.qtGanhadores11')






let arr15 = []
let arr15value = []


//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//

async function buscarResultado() {
    let response = await fetch(URl)
    let data = await response.json()
    let resultadosTodos = await data.map(dezen => dezen.dezenas)
    //let primeiroResultado = await resultadosTodos[0].join(" ")


    let bora = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15']

    let arrDeTeste = arr15value


    const arrDeTeste01 = new Array

    if (arrDeTeste.length == 15) {

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
})}

    let passo02 = await arrDeTeste01.filter( eli => eli.length > 10 )

    

    return passo02

    
}



//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//-------------------------------------------------------//

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

            receber15pontos.innerHTML = ''
            receber14pontos.innerHTML = ''
            receber13pontos.innerHTML = ''
            receber12pontos.innerHTML = ''
            receber11pontos.innerHTML = ''
            receber.innerHTML = ''

            dEscolhidasNum.innerHTML = arr15.length
            console.log('catch')
            console.log(arr15value.length)

        } else if (lore2.contains('enviarDezEscolhidas') && arr15.length == 15) {

            async function bus15Resul() {
                receber.innerHTML = ' ';
                receber11pontos.innerHTML = ' ';
                receber12pontos.innerHTML = ' ';
                receber13pontos.innerHTML = ' ';
                receber14pontos.innerHTML = ' ';
                receber15pontos.innerHTML = ' ';

                let passo021 = await buscarResultado()
                let passo0311 = await passo021.filter( eli => eli.length == 11 )
                let passo0312 = await passo021.filter( eli => eli.length == 12 )
                let passo0313 = await passo021.filter( eli => eli.length == 13 )
                let passo0314 = await passo021.filter( eli => eli.length == 14 )
                let passo0315 = await passo021.filter( eli => eli.length == 15 )
                console.log(passo0315)
                let arrSrt = arr15value.sort()
                arrSrt.forEach(element => {
                    const bolaEscolhida = document.createElement("div")
                    bolaEscolhida.setAttribute("class", "bolaEscolhida");
                    bolaEscolhida.innerHTML = `${element}`
                    receber.appendChild(bolaEscolhida)
                    console.log('foi2')
                });
            //-----------//
                if (passo0315.length > 0) {
                    console.log(passo0315)
                    textoPontosinputs15.innerHTML = `${passo0315.length} jogos acertados`
                }


                passo0315.forEach(ele15 => 
                {
                    const recerberDiv15 = document.createElement('div')
                    recerberDiv15.setAttribute('class', 'divBolaEscolhida')
                    ele15.forEach( ele151 => 
                    {
                        const bolaVerificada15 = document.createElement('div')
                        bolaVerificada15.setAttribute("class", "bolaEscolhida2");
                        bolaVerificada15.innerHTML = `${ele151}`
                        recerberDiv15.appendChild(bolaVerificada15)
                    })
                    receber15pontos.appendChild(recerberDiv15)
                })
            //-----------//
            //-----------//
            if (passo0314.length > 0) {
                console.log(passo0314)
                textoPontosinputs14.innerHTML = `${passo0314.length} jogos acertados`
            }
                passo0314.forEach(ele14 => 
                    {
                    const recerberDiv14 = document.createElement('div')
                    recerberDiv14.setAttribute('class', 'divBolaEscolhida')
                    ele14.forEach( ele141 => 
                    {
                        const bolaVerificada14 = document.createElement('div')
                        bolaVerificada14.setAttribute("class", "bolaEscolhida2");
                        bolaVerificada14.innerHTML = `${ele141}`
                        recerberDiv14.appendChild(bolaVerificada14)
                    })
                    receber14pontos.appendChild(recerberDiv14)


                    })
            //-----------//
            if (passo0313.length > 0) {
                console.log(passo0313)
                textoPontosinputs13.innerHTML = `${passo0313.length} jogos acertados`
            }
            passo0313.forEach(ele13 => 
                {
                    const recerberDiv13 = document.createElement('div')
                    recerberDiv13.setAttribute('class', 'divBolaEscolhida')
                    ele13.forEach( ele131 => 
                    {
                        const bolaVerificada13 = document.createElement('div')
                        bolaVerificada13.setAttribute("class", "bolaEscolhida2");
                        bolaVerificada13.innerHTML = `${ele131}`
                        recerberDiv13.appendChild(bolaVerificada13)
                    })
                    receber13pontos.appendChild(recerberDiv13)

            })
            //-----------//
            //-----------//
            if (passo0312.length > 0) {
                console.log(passo0312)
                textoPontosinputs12.innerHTML = `${passo0312.length} jogos acertados`
            }
            passo0312.forEach(ele12 => 
                {
                    const recerberDiv12 = document.createElement('div')
                    recerberDiv12.setAttribute('class', 'divBolaEscolhida')
                    ele12.forEach( ele121 => 
                    {
                        const bolaVerificada12 = document.createElement('div')
                        bolaVerificada12.setAttribute("class", "bolaEscolhida2");
                        bolaVerificada12.innerHTML = `${ele121}`
                        recerberDiv12.appendChild(bolaVerificada12)
                    })
                    receber12pontos.appendChild(recerberDiv12)

            })
            //-----------//
            //-----------//
            if (passo0311.length > 0) {
                console.log(passo0311)
                textoPontosinputs11.innerHTML = `${passo0311.length} jogos acertados`
            }
            passo0311.forEach(ele11 => 
                {   
                    const recerberDiv11 = document.createElement('div')
                    recerberDiv11.setAttribute('class', 'divBolaEscolhida') 
                    ele11.forEach( ele111 => 
                    {
                        const bolaVerificada11 = document.createElement('div')
                        bolaVerificada11.setAttribute("class", "bolaEscolhida2");
                        bolaVerificada11.innerHTML = `${ele111}`
                        recerberDiv11.appendChild(bolaVerificada11)
                    })
                    receber11pontos.appendChild(recerberDiv11)


            })
            //-----------//

                

            }
            
            
            //receber.innerHTML = (`<p>${arrSrt.toString()}</p>`)
            bus15Resul()
            console.log('foi3')
        }

    })



    

//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//





async function buscarResultadoLatest() {
    bolas.innerHTML = " "
    let response = await fetch(latest);
    let data = await response.json();
    console.log(data)
    let resultadosData = await data.data;
    let resultadosForEachLatest = await data.dezenas


    // colocar valores
    let vencedores15 = data.premiacoes[0].vencedores
    if (vencedores15 > 0)
    {
        let premio15Puro = data.premiacoes[0].premio
        let premio15 = premio15Puro.replace(",", ".")
        let premio15Num = Number(premio15.replaceAll(".", ""))
        let premioTotal = vencedores15 * premio15Num
        inputPremio.innerHTML = premioTotal;
        input15pts.innerHTML = premioTotal;
        qtGanhadores15.innerHTML = `${svg}`
        console.log(premio15Puro)
        console.log(premio15)
        console.log(premio15Num)
        console.log(premioTotal)
    }
    else {
        inputPremio.innerHTML = "ACUMULOU";
        qtGanhadores15.innerHTML = `${svg}`
        input15pts.innerHTML = "Nenhum";
    }


    const vencedores14 = data.premiacoes[1].vencedores
    qtGanhadores14.innerHTML = `${svg}  ${vencedores14}`
    const premio14Puro = data.premiacoes[1].premio
    input14pts.innerHTML = `${svgMoney} ${premio14Puro}` 


    const vencedores13 = data.premiacoes[2].vencedores
    qtGanhadores13.innerHTML = `${svg}  ${vencedores13}`
    const premio13Puro = data.premiacoes[2].premio
    input13pts.innerHTML = `${svgMoney} ${premio13Puro}`

    const vencedores12 = data.premiacoes[3].vencedores
    qtGanhadores12.innerHTML = `${svg}  ${vencedores12}`
    const premio12Puro = data.premiacoes[3].premio
    input12pts.innerHTML = `${svgMoney} ${premio12Puro}`
    
    const vencedores11 = data.premiacoes[4].vencedores
    qtGanhadores11.innerHTML = `${svg}  ${vencedores11}`
    const premio11Puro = data.premiacoes[4].premio
    input11pts.innerHTML = `${svgMoney} ${premio11Puro}`



//colocar data
    let inputData = document.querySelector("#inputData");
    inputData.setAttribute("class", "dataDoSorteio");
    inputData.innerHTML = `${resultadosData}`;
    console.log(vencedores15)
    
    

    return resultadosForEachLatest.forEach(element => {
        const elementoBola = document.createElement("div")
        elementoBola.setAttribute("class", "bola");
        elementoBola.innerHTML = `${element}`
        bolas.appendChild(elementoBola)
        

    });
}