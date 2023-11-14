let funcao_principal = () => {
    let mat1 = []
    let mat2 = []
    entrada_dados(mat1, num)
    console.log(mat1)
    let num = Number(prompt(`Informe um número`))
    multiplicacao(mat1,mat2, num)
    console.log(mat2)
}

let entrada_dados = (mat1) => {
    for(let i=0;i<3;i++){
        mat1[i] = []
        for(let j=0;j<3;j++){
            mat1[i][j] = Number(prompt(`Valor matriz 1 [${i}][${j}]`))
        }
    }
}

let multiplicacao = (mat1,mat2,num) => {
    for(let i=0;i<3;i++){
        mat2[i] = []
        for(let j=0;j<3;j++){
            mat2[i][j] = mat1[i][j] * num
        }
    }
}

funcao_principal()