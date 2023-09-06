    //Faça um programa em JS que guarde em um vetor dados de 5  partidos políticos: código, nome, sigla, presidente, nro de políticos
    //Em seguida, guarde em um vetor dados de 5 políticos: código do partido, nome do político, qtde de votos na eleição atual (inicie com 0) e cargo que ocupa
    //Não é possível crias dois partidos com o mesmo código
    //Não é possível cadastrar um político de um partido que não exista
    //Ao final, inicie uma votação, faça o cadastro de 10 votos, e atualize a qtde de votos do político. Não é possível votar em candidato que não exista, votar em um candidato de um partido errado.
    //Finalmente, mostrar os dados do político que teve mais votos. 

    let exercicio06 = () =>{
        let partidos=[]
        let politicos=[]
        let opcao
        do{
            opcao=Number(prompt("Digite:\n1-Cadastrar um partido.\n2-Cadastrar um político.\n3-Iniciar a votação.\n4-Mostrar o resultado.\n5-Sair."))
            switch(opcao){
                case 1:entrada_de_dados(partidos)
                    break
                case 2:entrada_de_dados_politicos(partidos,politicos)
                    break
                case 3:votacao(politicos)
                    break
                case 4: resultado(politicos)
                    break
                case 5:alert("Encerrando programa")
                    break
                default:alert("Opção inválida")
            }
        }
        while(opcao!=5)
    }

    let entrada_de_dados = (partidos) => {
        let objPartidos = {
            codigo: Number(prompt("Informe o código do partido: ")),
            nome: prompt("Informe o nome do partido: "),
            sigla: prompt("Informe a sigla do partido: "),
            presidente: prompt("Informe o presidente do partido: "),
            nro: Number(prompt("Informe o numero de membros do partido: "))
        }
        while(partidos.some((part) => part.codigo == objPartidos.codigo)){
            objPartidos.codigo = Number(prompt("Informe o código do partido: "))
        }
        partidos.push(objPartidos)
    }

    let entrada_de_dados_politicos = (partidos,politicos) =>{
        if(partidos.length == 0){
            console.log("Não há partidos cadastrados.")
        }
        else{
            let objPoliticos ={
                codigo_politico: Number(prompt("Informe o código do partido")),
                nome_politico: prompt("Informe o nome: ").toUpperCase(),
                quantidade_de_votos: 0,
                cargo_politico: prompt("Informe o cargo: ")
            }
            while(!partidos.some((part) => part.codigo == objPoliticos.codigo_politico)){
                objPoliticos.codigo_politico = Number(prompt("Informe o código do partido"))
            }
            politicos.push(objPoliticos)
        }
    }

    let votacao = (politicos) => {
        if(politicos.length == 0){
            console.log("Não há politicos cadastrados.")
        }
        else{
                let nome_votacao = prompt("Informe o nome do candidato: ").toUpperCase()
                let partido_votacao = Number(prompt("Informe o codigo do partido: "))
                let quantidade_de_votos_votacao = Number(prompt("Informe a quantidade de votos: "))
                let achou = false
                    if(politicos.nome_politico == nome_votacao && politicos.codigo_politico == partido_votacao){
                        achou = true
                        politicos.quantidade_de_votos = politicos.quantidade_de_votos + quantidade_de_votos_votacao
                    }
                
                if(!achou){
                    alert("Candidato não encontrado")
                }
        } 
    }

    let resultado = (politicos) => {
        if(politicos.length == 0){
            console.log("Não há politicos cadastrados.")
        }
        else{
            let Obj_candidato_mais_votdo = politicos[0]
        for(i=0;i<politicos.length;i++){
            if(politicos[i].quantidade_de_votos>Obj_candidato_mais_votdo){
                Obj_candidato_mais_votdo = politicos[i]
            }
        }
        alert(`O candidato com maior quantidade de votos foi: ${Obj_candidato_mais_votdo}`)
        }
    }
