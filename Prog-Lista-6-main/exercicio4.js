let funcao_principal = () => {
    let matriz = []
    let notas = []
    let vetor = []
    leitura_matriz(matriz)
    leitura_vetor(vetor)
    calculos(matriz, notas)
    media(notas)
    resultados(vetor, notas)
}

let leitura_matriz = (matriz) => {
    for(i=0;i<15;i++){
        matriz[i] = []
        for(j=0;j<5;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]: `))
        }
    }
}

let leitura_vetor = (vetor) => {
    for(i=0;i<15;i++){
        vetor[i] = prompt(`Informe o valor do vetor ${i}: `)
    }
}

let calculos = (matriz, notas) => {
    for(i=0;i<15;i++){
        let soma = 0
        for(j=0;j<5;j++){
            soma = soma + matriz[i][j]
        }
        soma = soma / 5
        notas.push(soma)
    }
    console.log(notas)
}

let resultados = (vetor, notas) => {
    for(i=0;i<15;i++){
        let situacao = ''
        console.log(`Aluno ${i+1}:\nNome: ${vetor[i]}\nNota: ${notas[i]}`)
        if(notas[i]>6){
            situacao = 'Aprovado'
        }
        else{
            situacao = 'Reprovado'
        }
        console.log(`Situação: ${situacao}`)
    }
}

let media = (notas) => {
    let m = 0
    for(i=0;i<15;i++){
        m = m + notas[i]
    }
    m = m / 15
    console.log(`Média da turma = ${m}`)
}