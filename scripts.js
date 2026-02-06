let inputTexto = document.querySelector(".input-texto")
let traducao = document.querySelector(".traducao")


async function traduzir(){

    let endereco = "https://api.mymemory.translated.net/get?q=" 
    + inputTexto.value
    + "&langpair=pt-BR|en"

    let resposta = await fetch(endereco)

    let dados = await resposta.json()

    traducao.innerHTML = dados.responseData.translatedText


    console.log(dados)

}