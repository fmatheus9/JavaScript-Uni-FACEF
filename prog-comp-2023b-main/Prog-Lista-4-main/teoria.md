Vetores são variaves que podem conter mais de um valor.
Para declarar um vetor: //let vetor = []
Vetor na posição 1 recebe 10 = vetor[1]=10 e por ai vai. O "i" é o contador.
A vantagem do vetor é que ele guarda o valor das variaveis, não se perde o valor. 

let vetor = []
for(let i=1; i<=6; i++){ //o for ajuda a percorrer o vetor. 
    vetor[i]=Number(prompt("Informe o ${i} elemento: "))
}
