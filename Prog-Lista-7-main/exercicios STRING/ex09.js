//9.	Receba uma palavra e a imprima de tra´s-para-frente.
let ex09 = (str) => {
    let nova_str = str.split('') //transforma a string em um vetor contendo as letras da frase como indice, inclusive os espaços
    console.log(nova_str)
    nova_str = nova_str.reverse() // inverte o vetor
    console.log(nova_str)
    nova_str = nova_str.join('') // junta todos os itens do vetor 
    console.log(nova_str)
}
ex09(prompt("String: "))
