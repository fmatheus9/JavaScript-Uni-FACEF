let entrada_dados = () => {
    let mat1 = []
    let mat2 = []
    let vetor = []
  
    for (let i = 0; i < 4; i++) {
        mat1[i] = [];
        for (let j = 0; j < 6; j++) {
            mat1[i][j] = Number(prompt(`Valor matriz 1 [${i}][${j}]`));
        }
    }
  
    for (let i = 0; i < 6; i++) {
        mat2[i] = [];
        for (let j = 0; j < 4; j++) {
            mat2[i][j] = Number(prompt(`Valor matriz 2 [${i}][${j}]`));
        }
    }

    console.log(mat1)
    console.log(mat2)
    somaMatrizes(mat1, mat2, vetor)
}
  
let somaMatrizes = (mat1, mat2, vetor) => {
    for (let i = 0; i < 4; i++) {
        let soma = 0
        for (let j = 0; j < 6; j++) {
            soma += mat1[i][j] + mat2[j][i]
        }
        vetor.push(soma)
    }
    console.log(vetor)
}
entrada_dados()
  