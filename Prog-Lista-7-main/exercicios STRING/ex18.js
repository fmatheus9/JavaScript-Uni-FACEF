//18.	Recebe  do  usua´rio  uma  string  S,  um  caractere  C,  e  uma posic¸a˜o I e devolve o ´ındice da primeira posic¸a˜o da 
//string onde foi encontrado o caractere C. A procura deve comec¸ar a partir da posic¸a˜o I.

let ex18 = (str, caractere, posicao) => {
    text = str.indexOf(caractere, posicao)
    if(text == -1){
        console.log("Caractere não encontrado")
    }
    else{
        console.log(`Caractere encontrado na posição ${text}`)
    }
}
ex18(str = prompt("String: "), caractere = prompt("Caractere: "), posicao = Number(prompt("Posição: ")))
