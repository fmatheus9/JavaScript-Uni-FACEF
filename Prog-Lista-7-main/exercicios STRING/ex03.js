//3.	leia um nome e imprima as 4 primeiras letras do nome.

let ex03 = (str) => {
    letra = str.slice(0,4)
    console.log(letra)
}

ex03(prompt("Digite uma palavra: "))