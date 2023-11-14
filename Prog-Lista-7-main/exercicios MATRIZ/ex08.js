let funcao_principal = () => {
    mat1 = []
    mat2 = []
    matSOMA = []
    matDIFE = []

    entrada_dados1(mat1)
    entrada_dados2(mat2)
    somaMatrizes(matSOMA,mat1,mat2)
    diferencaMatrizes(matDIFE,mat1,mat2)
    console.log("MATRIZES:")
    console.log(mat1)
    console.log(mat2)
    console.log('SOMA')
    console.log(matSOMA)
    console.log('DIFERENÇA')
    console.log(matDIFE)
}

let entrada_dados1 = (mat1) => {
    for(let i=0;i<3;i++){
        mat1[i] = []
        for(let j=0;j<8;j++){
            mat1[i][j] = Number(prompt(`Valor matriz 1 [${i}][${j}]`))
        }
    }
}

let entrada_dados2 = (mat2) => {
    for(let i=0;i<3;i++){
        mat2[i] = []
        for(let j=0;j<8;j++){
            mat2[i][j] = Number(prompt(`Valor matriz 2 [${i}][${j}]`))
        }
    }
}

let somaMatrizes = (matSOMA,mat1,mat2) => {
    for(let i=0;i<3;i++){
        matSOMA[i] = []
        for(let j=0;j<8;j++){
            matSOMA[i][j] = mat1[i][j] + mat2[i][j]
        }
    }
}

let diferencaMatrizes = (matSOMA,mat1,mat2) => {
    for(let i=0;i<3;i++){
        matDIFE[i] = []
        for(let j=0;j<8;j++){
            matDIFE[i][j] = mat1[i][j] - mat2[i][j]
        }
    }
}

funcao_principal()