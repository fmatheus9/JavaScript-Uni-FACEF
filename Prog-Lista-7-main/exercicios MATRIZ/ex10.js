let funcao_principal = () => {
    let mat1 = []
    entrada_dados(mat1)
    console.log(mat1)
    soma_linha_4(mat1)
    soma_coluna_2(mat1)
    diagona_principal(mat1)
    diagona_segundaria(mat1)
    matriz(mat1)

}

let entrada_dados = (mat1) => {
    for(let i=0;i<5;i++){
        mat1[i] = []
        for(let j=0;j<5;j++){
            mat1[i][j] = Number(prompt(`Valor matriz 1 [${i}][${j}]`))
        }
    }
}

let soma_linha_4 = (mat1) => {
    let soma = 0
    let i = 3
    for(let j=0;j<5;j++){
        soma += mat1[i][j]
    }
    console.log(soma)
}

let soma_coluna_2 = (mat1) => {
    let soma = 0
    let j = 1
    for(let i=0;i<5;i++){
        soma += mat1[i][j]
    }
    console.log(soma)
}

let diagona_principal = (mat1) => {
    let soma = 0
    for(let i=0;i<5;i++){
        soma += mat1[i][i]
    }
    console.log(soma)
}

let diagona_segundaria = (mat1) => {
    let soma = 0
    for(let i=0;i<5;i++){
        soma += mat1[i][4-i]
    }
    console.log(soma)
}

let matriz = (mat1) => {
    let soma = 0
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            soma += mat1[i][j]
        }
    }
    console.log(soma)
}

funcao_principal()