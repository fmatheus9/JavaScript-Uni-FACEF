let funcao_principal = () => {
    let vetor_partidos = []
    let vetor_politico = []
    let opcoes
    do{
        opcoes = Number(prompt(`1-Cadastrar Partido.\nCadastrar Candidato.\n3-Votar.\n4-Sair.`))
        switch(opcoes){
            case 1: cadastrar_partido(vetor_partidos)
                break
            case 2: cadastrar_politico(vetor_partidos, vetor_politico)
                break
            case 3: votacao(vetor_politico)
                break
            case 4: alert("Encerrando sistema") 
                break
            default: alert("Opção inválida")
        }
    }
    while(opcoes != 4)
}

let cadastrar_partido = (vetor_partidos) =>{
    let objPartidos ={
        codigo_partido: Number(prompt("Informe o código do partido: ")),
        nome_partido: prompt("Informe o nome do partido: "),
        sigla_partido: prompt("Informe a sigla do partido: "),
        nroCandidatos: Number(prompt("Informe o número de candidatos do partido: "))
    }
    //verifica se o código ja existe
    while(vetor_partidos.some((partido) => partido.codigo_partido == objPartidos.codigo_partido)){
        objPartidos.codigo_partido = Number(prompt("Informe um novo código"))
    }
    //adiciona o objeto ao vetor
    vetor_partidos.push(objPartidos)
}

let cadastrar_politico = (vetor_partidos, vetor_politico) =>{
    let objPoliticos = {
        codigo_partido2: Number(prompt("Informe o código do partido: ")),
        nome_politico: prompt("Informe o nome: "),
        quantidade_votos: 0
    }
    while(!vetor_partidos.some((item) => item.codigo_partido == objPoliticos.codigo_partido2)){
        alert("Partido não existe.")
        objPoliticos.codigo_partido2 = prompt("Informe um código válido:")
    }
    vetor_politico.push(objPoliticos)
}

let votacao = (vetor_politico) =>{
    let codigo_partido3 = Number(prompt("Informe o código do partido: "))
    let nomeCandidato = prompt("INforme o nome do candidato: ")
    let achou = false
    for(i=0;i<vetor_politico.lenght;i++){
        if(vetor_politico[i].codigo_partido2 == codigo_partido3 && vetor_partidos[i].nome_politico == nomeCandidato){
            vetor_politico[i].quantidade_votos++
            alert("voto computado")
            achou = true
        }
    }
    if(!achou){
        alert("Partido ou candidato não encontrado")
    }
}