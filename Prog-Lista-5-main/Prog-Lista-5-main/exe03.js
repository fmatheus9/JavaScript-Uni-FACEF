//SISTEMA DE VOTAÇÃO: ENTRAR COM 10 CANDIDATOS (CÓDIGO-NOME-PONTO-PARTIDO) - INFORMAR NOME E PARTIDO DO CANDIDATO MAIS VOTADO.
//A PARTIR DE UM PARTIDO INFORMADO PELO USUÁRIO, MOSTRAR O MAIS VOTADO.
function exe03(){
    let vet=[] //cria o vetor
    let part=["PT","PSDB","PL","PSB"] // CRIA O VETOR COM OS PARTIDOS PARA VERIFICAR SE O PARTIDO INFORMADO É VÁLIDO

    for(i=0;i<10;i++){
        let obj={ //cria o objeto
            codigo:Number(prompt(`Código do candidato ${i+1}: `)),
            nome:prompt(`Nome do candidato ${i+1}: `),
            partido:prompt(`Partido do candidato ${i+1}: `).toUpperCase(),
            votos:Number(prompt(`Quantidade de votos do candidato ${i+1}: `))
        }
        while(!part.includes(obj.partido)){ //VERIFICA SE O PARTIDO INFORMADO É VALIDO (! = NEGAÇÃO)
            obj.partido=prompt(`Partido inválido! Informe o partido do candidato ${i+1}: `)
        }
        vet.push(obj) //coloca as informações do objeto dentro do vetor
    }
    
    //criar as variaveis do candidato mais votado
    let qnt=vet[0].votos
    let nomex=vet[0].nome
    let partidox=vet[o].partido
    for(i=0;i<10;i++){
        if(qnt<vet[i].votos){
            qnt=vet[i].votos
            nomex=vet[i].nome
            partidoX=vet[i].partido
        }
    }
    console.log(`Candidato mais votado: ${nomex}, com ${qnt} votos.\nPartido do candidato: ${partidoX}.`)

    //CANDIDATO MAIS VOTADO DE UM DETERMINADO PARTIDO
    let maisvotadoporpartido=0
    let nomemaisvotadoporpartido=""
    let maisPartido = prompt("Informe o partido para verificar o candidato mais votado: ")
    for(i=0;i<10;i++){
        if(vet[i].partido==maisPartido){
            if(vet[i].votos>maisvotadoporpartido){
                maisvotadoporpartido=vet[i].votos
                nomemaisvotadoporpartido=vet[i].nome
            }
        }
    }
}