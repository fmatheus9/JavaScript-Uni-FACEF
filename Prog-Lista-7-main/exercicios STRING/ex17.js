//17.	Recebe uma string S e inteiros na˜o-negativos I e J e imprima o segmento S[I..J].
let ex17 = (str, i, j) => {
    text = str.slice(i,j+1)
    console.log(text)
}
ex17(str = prompt("Frase 1: "), i = Number(prompt("I: ")), j = Number(prompt("J: ")))