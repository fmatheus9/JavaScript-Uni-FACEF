//13.	Leia um vetor contendo letras de uma frase inclusive os espacos em branco.  
// Retirar os espac¸os em branco do vetor e depois escrever o vetor resultante.
let ex13 = (str) => {
    let vetor = str.split('')
    for(i=0;i<vetor.length;i++){
        if(vetor[i] == ' '){
            vetor[i] = ''
        }
    }
    vetor = vetor.join('')
    console.log(vetor)
    
}
ex13(prompt("Frase: "))
