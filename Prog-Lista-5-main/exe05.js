    let exe05 = () => {
        let vetFarmacias=[]
        let vetRemedios=[]
        let opcao
        do{
            opcao=Number(prompt("Digite:\n1-Cadastrar farmacia.\n2-Cadastrar remedio.\n3-Efetivar compra.\n4-Sair."))
            switch(opcao){
                case 1:cadastraFarmacias(vetFarmacias)
                    break
                case 2:cadastraRemedios(vetRemedios, vetFarmacias)
                    break
                case 3:vendeRemedios(vetRemedios)
                    break
                case 4:alert("Encerrando programa")
                    break
                default:alert("Opção inválida")
            }
        }
        while(opcao!=4)
    }


    let cadastraFarmacias = (vetFarmacias) => {
        
            let objFarm = {
                codigo: Number(prompt(`Informe o código da farmácia`)),
                nome: prompt(`Informe o nome da farmácia`),
                endereco: prompt(`Informe o endereço da farmácia`)
            }
            while (vetFarmacias.some( (farm) => farm.codigo == objFarm.codigo)){
                alert(`Código já existente`)
                objFarm.codigo = Number(prompt(`Informe novo código da farmácia`))
            }
            vetFarmacias.push(objFarm)
        
    }

    let cadastraRemedios = (vetRemedios, vetFarmacias) => {
        if(vetFarmacias.length == 0){
            console.log("Não há farmácias cadastradas")
        }
        else{
            let objRem = {
                codigoFarm: Number(prompt(`Informe o código da farmácia`)),
                nome: prompt(`Informe o nome do remédio`),
                qtde: Number(prompt(`Informe a quantidade do remédio`)),
                preco: Number(prompt(`Informe o preço do remédio`))
            }
            while (!vetFarmacias.some( (farm) => farm.codigo == objRem.codigoFarm)){
                alert('Farmácio não existente')
                objRem.codigoFarm = Number(prompt(`Informe novo código da farmácia`))
            }
            vetRemedios.push(objRem)
        }
    }
    let vendeRemedios = (vetRemedios) => {
        if(vetRemedios.length == 0){
            console.log("Não há remedios cadastradas")
        }
        else{
            let codFarmacia = Number(prompt(`Informe o código da farmácia do remédio`))
            let nomeRemedio = prompt(`Informe o nome do remédio`)
            let qtdeVendida = Number(prompt(`Informe a quantidade vendida`))
            // vamos procurar o remédio na lista de remédios
            let achou = false // assumo que não encontrei o remédio
            for(let i=0;i<vetRemedios.length;i++){
                if (vetRemedios[i].codigoFarm == codFarmacia && 
                    vetRemedios[i].nome == nomeRemedio){
                        achou = true // achei o remédio
                        if (vetRemedios[i].qtde >= qtdeVendida){ // podemos vender
                            // atualiza estoque
                            vetRemedios[i].qtde = vetRemedios[i].qtde - qtdeVendida
                            alert(`Venda efetuada com sucesso`)
                        }
                        else {
                            alert('Estoque insuficiente')
                        }
                }
            } 
            if (!achou){
                alert(`Remédio/farmácia não existe`)
            }
        }
    }