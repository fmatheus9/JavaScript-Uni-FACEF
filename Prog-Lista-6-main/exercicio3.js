let funcao_principal = () => {
    let matriz = []
    leitura_matriz(matriz)
    maior_matriz(matriz)
    menor_matriz(matriz)
}

let leitura_matriz = (matriz) => {
    for(i=0;i<6;i++){
        matriz[i] = []
        for(j=0;j<3;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`))
        }
    }
    console.log(matriz)
}

let maior_matriz = (matriz) => {
    let maior = matriz[0][0]
    let indice1 
    let indice2
    for(i=0;i<6;i++){
        for(j=0;j<3;j++){
            if(maior < matriz[i][j]){
                maior = matriz[i][j]
                indice1 = i
                indice2 = j
            }
        }
    }
    console.log(`Maior valor = ${maior} nos índices i = ${indice1}, j = ${indice2}`)
}

let menor_matriz = (matriz) => {
    menor = matriz[0][0]
    let indice1 
    let indice2
    for(i=0;i<6;i++){
        for(j=0;j<3;j++){
            if(menor > matriz[i][j]){
                menor = matriz[i][j]
                indice1 = i
                indice2 = j
            }
        }
    }
    console.log(`Menor valor = ${menor} nos índices i = ${indice1}, j = ${indice2}`)
}