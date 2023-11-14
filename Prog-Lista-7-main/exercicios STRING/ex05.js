//5.Ler nome, sexo e idade. Se sexo for feminino e idade menor que 25, imprime o nome da pessoa e a palavra “ACEITA”, 
//caso contra´rio imprimir “NA˜ O ACEITA”.

let ex05 = () => {
    let nome = prompt("Nome: ")
    let sexo = prompt("Sexo: ").toUpperCase()
    let idade = Number(prompt("Idade: "))

    if(sexo == 'FEMININO' && idade < 25){
        console.log(`${nome}. ACEITA`)
    }
    else{
        console.log("NÃO ACEITA")
    }
}