//16.	Receba  duas  frases  distintas  e  imprima  de  maneira  invertida, trocando as letras A por *.

let ex16 = (str1, str2) => {
    let nova_str1 = str1.split('').reverse().join('').replace(/A/g, '*').replace(/a/g, '*')
    let nova_str2 = str2.split('').reverse().join('').replace(/A/g, '*').replace(/a/g, '*')
    console.log(nova_str1)
    console.log(nova_str2)
}
ex16(str1 = prompt("Frase 1: "),str2 = prompt("Frase 2: "))


