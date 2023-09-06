// Essa função é assincrona pois vai fazer uma requisição pra uma API e não vai esperar a resposta pra continuar o código
//quem a chamar pode executar outras tarefas mesmo sem ter resposta

async function buscarCep(){
    //pega o valor do input
    let cep = document.getElementById("cep").value

    //faz a requisição pra api
    //await é aguardar pela resposta da requisição (promise)
    //fetch é a função que faz a requisição da pi
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)

    //dados chegam em forma de string
    //transforma a resposta em um objeto
    let dados = await resposta.json()

    //pega o elemento que vai ser alterado
    //recupera o logradouro
    document.getElementById('logradouro').value = dados.logradouro
    document.getElementById('complemento').value = dados.complemento
    document.getElementById('bairro').value = dados.bairro
    document.getElementById('localidade').value = dados.localidade
    document.getElementById('uf').value = dados.uf
    document.getElementById('ibge').value = dados.ibge
    document.getElementById('gia').value = dados.gia

}