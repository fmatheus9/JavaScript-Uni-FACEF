let funcao_principal = () => {
    let matriz = []
    leitura_matriz(matriz)
    total_mes(matriz)
    total_semana(matriz)
    total_ano(matriz)
}

let leitura_matriz = (matriz) => {
    for(i=0;i<12;i++){
        matriz[i] = []
        for(j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Valor do mês ${i+1}, semana ${j+1}: `))
        }
    }
}

let total_mes = (matriz) => {
    console.log("VALORES MENSAIS")
    for(i=0;i<12;i++){
        let soma = 0
        for(j=0;j<4;j++){
            soma = soma + matriz[i][j]
        }
        console.log(`Total vendido no mês ${i+1} = ${soma}.`)
    }
}

let total_semana = (matriz) => {
    console.log("VALORES POR SEMANA")
    x = 1
    for(i=0;i<12;i++){
        for(j=0;j<4;j++){
            console.log(`Valor da semana ${x}: ${matriz[i][j]}`)
            x++
        }
    }
}

let total_ano = (matriz) => {
    console.log("VALOR TOTAL")
    let total = 0
    for(i=0;i<12;i++){
        for(j=0;j<4;j++){
            total = total + matriz[i][j]
        }
    }
    console.log(total)
}
