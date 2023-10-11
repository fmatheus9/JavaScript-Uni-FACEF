let funcao_principal = () => {
    let matriz = []
    leitura_matriz(matriz)
    calculo_matriz(matriz)
    media_matriz(matriz)
}

let leitura_matriz = (matriz) => {
    for(i=0;i<2;i++){
        matriz[i] = []
        for(j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`))
        }
    }
    console.log(matriz)
}

let calculo_matriz = (matriz) => {
    let vet = []
    for(i=0;i<2;i++){
        let qntd = 0
        for(j=0;j<4;j++){
            if(matriz[i][j] > 12 && matriz[i][j] < 20){
               qntd++
            }
        }
        vet.push(qntd)
    }
    console.log(vet)
}

let media_matriz = (matriz) => {
    let media = 0
    let qntd = 0
    for(i=0;i<2;i++){
        for(j=0;j<4;j++){
            if(matriz[i][j] % 2 == 0){
                media = media + matriz[i][j]
                qntd++
            }
        }
    }

    if(qntd != 0){
        media = media/qntd
        console.log(media)
    }
    else{
        media = 0
        console.log(media)
    }
}