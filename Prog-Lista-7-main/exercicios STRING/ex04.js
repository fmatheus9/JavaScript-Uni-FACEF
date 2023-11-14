//4.	Digite um nome, calcule e retorne quantas letras tem esse nome.

let ex04 = (str) => {
    str = str.split(" ").join("") // o split separa pelo espaço em um vetor, o join junta os dois itens do vetor
    tamanho = str.length
    console.log(`Tamanho do nome: ${tamanho} caracteres.`)
}

ex04(prompt("Digite uma nome: "))