let vet=[]      //Cria o vetor 
for(i=0;i<2;i++){   //Para cada filme 
    let obj = {     //Cria objeto
        nome: prompt(`Nome do filme ${i+1}: `),
        codigo: Number(prompt(`Código do filme ${i+1}:`)),
        duracao: Number(prompt(`Duração do filme ${i+1}:`)),
        nota: Number(prompt(`Nota do filme ${i+1}:`)),
        classificacao: Number(prompt(`Classificação do filme ${i+1}:`)),
    }
    vet.push(obj) // Pega o objeto e joga dentro do vetor. Adiciona o Objeto no Vetor 
}
//As variaveis ficam de fora do objeto 
let media=0
//pra acessar a informação do objeto precisa do vetor
//Criar um "For" para cada vairável. Não foi oq eu fiz, mas é isso. 
let maiorfilme=vet[0].duracao
let maioarvaliacao=vet[0].nota
let nomefilme=vet[0].titulo // para achar o nome do filme com maior duração por exemplo
let nomevaliacao=vet[0].titulo
for(i=0;i<2;i++){
    media=media+vet[i].classificacao
    if(vet[i].duracao>maiorfilme){
        maiorfilme=vet[i].duracao
        nomefilme=vet[i].nome
    }
    if(vet[i].nota>maioarvaliacao){
        maioarvaliacao=vet[i].nota
        nomevaliacao=vet[i].nome
    }
}
media=media/2
console.log(`Média da classificação dos filmes: ${media}.\nFilme com maior nota: ${maioarvaliacao}, sendo ele ${nomevaliacao}.\nFilme com maior duração: ${maiorfilme}, sendo ele ${nomefilme}`)
