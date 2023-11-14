//11.Receba uma palavra e calcule quantas vogais (a, e, i, o, u) possui essa palavra. 
//Entre com um caractere (vogal ou consoante) e substitua todas as vogais da palavra dada por esse caractere
let ex11 = (str) => {
    let contador = 0
    for(i=0;i<str.length;i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            contador++
        }
    }
    let caractere = prompt("Entre com um caractere: ")
    let nova_str = str.replace(/a/g, caractere).replace(/e/g, caractere).replace(/i/g, caractere).replace(/o/g, caractere).replace(/u/g, caractere)
    console.log(contador)
    console.log(nova_str)
}
ex11(prompt("String: "))
