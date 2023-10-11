let funcao_principal = () => {
    let matriz = []
    leitura_matriz(matriz)
    calculo_matriz(matriz)
}

let leitura_matriz = (matriz) => {
    for(i=0;i<3;i++){
        matriz[i] = []
        for(j=0;j<5;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`))
        }
    }
    console.log(matriz)
}

let calculo_matriz = (matriz) => {
    let qntd = 0
    for(i=0;i<3;i++){
        for(j=0;j<5;j++){
            if(matriz[i][j] > 15 && matriz[i][j] < 20){
                qntd++
            }
        }
    }
    console.log(qntd)
}