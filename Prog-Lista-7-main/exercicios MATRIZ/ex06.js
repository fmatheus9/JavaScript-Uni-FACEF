
let entrada_dados = () => {
    let mat = []
    let vetor= []
    for(i=0;i<20;i++){
        mat[i] = [] 
        for(j=0;j<10;j++){
            mat[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`))
        }
    }
    console.log(mat)
    let soma_coluna = 0
    for(j=0;j<10;j++){
        soma_coluna = 0
        for(i=0;i<20;i++){
            soma_coluna = soma_coluna + mat[i][j]
        }
    vetor.push(soma_coluna)
    }
    console.log(vetor)
    novamatriz(mat, vetor)
}

let novamatriz = (mat, vetor) => {
    let matFinal = []
    for(i=0;i<20;i++){
        matFinal[i] = []
        for(j=0;j<10;j++){
            matFinal[i][j] = mat[i][j] * vetor[j]
        }
    }
    console.log(matFinal)
}