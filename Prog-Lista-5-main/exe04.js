//Faça um programa em java que solicite ao usuário dados de 10 bikes. Cada bike deve conter informaçoes como marca, modelo, quadro
//ano, aro e preço. Apos a entrada de dados o programa deve calcular e exibir ao usuário:
//1- mádia dos preços 2-bike mais antiga, deve se considerar empates 3- quais marcas sao da marca Caloi 4- quantas bikes possuem aro 29

function exe04(){
    let bikes=[]
    let marcas=["CALOI", "SCOTT", "CONONDALE"]

    //entrada de dados
    for(i=0;i<10;i++){
        let obj={
            marca:prompt(`Informe a marca da bike ${i+1}: `).toUpperCase(),
            modelo:prompt(`Informe o modelo da bike ${i+1}: `),
            quadro:Number(prompt(`Informe o quadro da bike ${i+1}: `)),
            ano:Number(prompt(`Informe o ano da bike ${i+1}: `)),
            aro:Number(prompt(`Informe o aro da bike ${i+1}: `)),
            preco:Number(prompt(`Informe o preço da bike ${i+1}: `))
        }
        while(!marcas.includes(obj.marca)){ // ENQUANTO O VALOR DE MARCA INFORMADO NÃO SEJA VÁLIO ELE REPETE
            obj.marca=prompt(`Informe a marca da bike ${i+1}: `)
        }
        bikes.push(obj) //ADICIONA OS VALORES O OBJ NO VETOR BIKES
    }
    //MEDIA DE PREÇOS
    let media=0
    for(i=0;i<10;i++){
        media = media+bikes[0].preco
    }
    media=media/10
    console.log(`Média dos preços: ${media}`)

    //BIKE MAIS ANTIGA
    let objAntigo = bikes[0] //INFORMA O OBJETO DA BIKE MAIS ANTIGA E NÃO SO O ANO
    for(i=0;i<10;i++){
        if(bikes[i].ano<objAntigo.ano){
            maisAntiga=bikes[i]
        }
    }
    console.log(`Mais antiga: ${objAntigo}`)
    
    //QUAIS SÃO DA MARCA CALOI
    let caloi=[]
    for(i=0;i<10;i++){
        if(bikes[i].marca=="CALOI"){
            caloi.push(bikes[i])
        }
    }
    console.log(`Quais são da marca CALOI: ${caloi}`)

    //QUANTAS BIKES POSSUEM ARO 29
    let j=0
    for(i=0;i<10;i++){
        if(bikes[i].aro==29){
            j++
        }
    }
    console.log(`Quantas bikes possuem aro 29: ${j}`)

    //MAIOR QUADRO
    let objQuadro = bike[0]
    for(i=0;i<10;i++){
        if(bikes[i].quadro> objQuadro.quadro){
            objQuadro=bikes[i]
        }
    }
    console.log(`Maior quadro: ${objQuadro}`)

}