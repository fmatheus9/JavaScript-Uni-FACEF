let funcao_principal = () =>{
    let album = []
    let figurinhas = []
    do{
        opcao=Number(prompt("1.Cadastrar 1 álbum.\n2.Cadastrar 1 figurinha.\n3. Comprar 1 figurinha.\n4.Trocar 1 figurinha.\n5.Calcular e mostrar todas as figurinhas que tem para troca.\n6.Calcular e mostrar qual figurinha tem maior quantidade.\n7.Sair"))
        switch(opcao){
            case 1:cadastro_album(album)
                break
            case 2:cadastro_figurinha(album,figurinhas)
                break
            case 3:compra_figurinha(album,figurinhas)
                break
            case 4:troca(album, figurinhas)
                break
            case 5:mostrar_figurinhas(figurinhas) 
                break
            case 6:maior_quantidade(figurinhas)
                break
            case 7: alert("Sistema encerrado.")
                break
            default:alert("Opção inválida")
        }
    }
    while(opcao!=7)
}

let cadastro_album = (album) =>{
    //Cadastrar 1 álbum, contendo o id, o nome, e a empresa que faz o álbum .
    // Não se pode cadastrar dois álbuns com o mesmo id, nem com o mesmo nome.
    let objAlbum = {
        id_album: Number(prompt("Informe o ID: ")),
        nome_album: prompt("INforme o nome: "),
        emprese_album: prompt("Informe a empresa: ")
    }
    while(album.some((alb) => alb.id_album == objAlbum.id_album)){
        objAlbum.id_album = Number(prompt("Informe um outro ID: "))
    }
    album.push(objAlbum)
}

let cadastro_figurinha = (album,figurinhas) =>{
    //Cadastrar 1 figurinha, contendo o número, o nome, o time, a quantidade (inicialmente é 0) e o id do álbum. 
    //Não se pode cadastrar duas figurinhas com o mesmo número. 
    //Também não é possível cadastrar uma figurinha em um álbum que não exista
    if(album.length == 0){
        alert("Nenhum album cadastrado.")
    }
    else{
        let objFigurinhas = {
            numero_figurinha: Number(prompt("Informe o número da figurinha: ")),
            nome_figurinha: prompt("Informe o nome da figurinha: "),
            time_figurinha: prompt("Informe o time da figurinha: "),
            quantidade_figurinha: 0,
            id_figurinha: Number(prompt("Informe o ID do album: "))
        }
        while(!album.some((alb) => alb.id_album == objFigurinhas.id_figurinha)){    
            objFigurinhas.id_figurinha = Number(prompt("Informe um ID de album válido: "))
        }
        figurinhas.push(objFigurinhas)
    }
    
}

let compra_figurinha = (album,figurinhas) =>{
    //Comprar 1 figurinha, informando o número desta, o id do álbum, e atualizando a quantidade. Verifique se a figurinha existe
    if(figurinhas.length == 0){
        alert("Nenhuma figurinha cadastrada. ")
    }
    else{
        let id_alb = Number(prompt("Informe o ID do album: "))
        let num_figurinhas = Number(prompt("Informe o número da figurinha: "))
        let achou = false
        for(let i = 0; i< figurinhas.length; i++){
            if(figurinhas[i].nome_figurinha == num_figurinhas && album[i].id_album == id_alb){
                achou = true
                figurinhas[i].quantidade_figurinhas ++
                alert(`Venda efetuada com sucesso.`)
            }
        }
        if (!achou){
            alert(`Figurinha/Album não existe.`)
        }
    }
}

let troca = (album, figurinhas) => {
    //Trocar 1 figurinha, informando os números das figurinhas e os ids dos álbuns que serão trocadas (atualize os estoques). 
    //Verifique se as figurinhas existem.
    if(figurinhas.length == 0){
        alert("Nenhuma figurinha cadastrada.")
    }
    else{
        let id_troca1 = Number(prompt("Informe o ID do album: "))
        let num_troca1 =Number(prompt("Informe o número da figurinha para receber: "))
        let achou1 = false
        let achou2 = false
        for(let i = 0; i< figurinhas.length; i++){
            if(id_troca1 == album[i].id_album && num_troca1 == figurinhas[i].numero_figurinha){
                achou1 = true
                let id_troca2 = Number(prompt("Informe o ID do album: "))
                let num_troca2 =Number(prompt("Informe o número da figurinha para doar: "))
                for(let j = 0; j< figurinhas.length; j++){
                    if(id_troca2 == album[j].id_album && num_troca2 == figurinhas[j].numero_figurinha){
                        achou2 = true
                        figurinhas[i].quantidade_figurinha ++
                        figurinhas[j].quantidade_figurinha --
                        alert("Troca efetuada com sucesso")
                    }
                }
            }
            if (!achou2){
                alert(`Figurinha/Album não existe.`)
            }
        }
        if (!achou1){
            alert(`Figurinha/Album não existe.`)
        }
    }
}

let mostrar_figurinhas = (figurinhas) => {
    //Calcular e mostrar todas as figurinhas que tem para troca (quantidade maior que 1)
    let figurinhas_disponiveis =[]
    for(let i = 0; i< figurinhas.length; i++){ 
        if(figurinhas[i].quantidade_figurinha > 0){
            figurinhas_disponiveis = figurinhas[i].quantidade_figurinha
        }
    }
    alert(figurinhas_disponiveis)
}

let maior_quantidade = (figurinhas) =>{
    //Calcular e mostrar qual figurinha tem maior quantidade, exibindo o nome e empresa do álbum, 
    //bem como o nome e o time da figurinha
    let nomeMaior
    let maior = figurinhas[0].quantidade_figurinha
    let vetMaior = []
    for(let i = 0; i< figurinhas.length; i++){
        if(figurinhas[i].quantidade_figurinha > maior){
            nomeMaior = figurinhas[i].num_figurinha
            maior = figurinhas[i].quantidade_figurinha
            vetMaior = album[i].objAlbum
        }
    }
    alert(`Figurinha em maior quantidade: ${nomeMaior}, com ${maior} figurinhas. Album: ${vetMaior}`)
}