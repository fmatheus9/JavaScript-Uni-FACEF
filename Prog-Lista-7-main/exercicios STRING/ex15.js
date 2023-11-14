//15.	Leia a idade e o primeiro nome de 10 pessoas. Seu programa deve terminar quando uma idade negativa for digitada. 
//Ao terminar, seu programa deve escrever o nome e a idade das pessoas mais jovens e mais velhas.

let ex15 = (vetIDADE, vetNOME) => {

    let maisNovo1 = vetIDADE[0]
    let maisNovo2 = vetNOME[0]
    let maisVelho1 = vetIDADE[0]
    let maisVelho2 = vetNOME[0]

    for(i=0;i<vetIDADE.length;i++){
        if (maisNovo1 > vetIDADE[i] && vetIDADE[i] > 0 ){
            maisNovo1 = vetIDADE[i]
            maisNovo2 = vetNOME[i]
        }
        if (maisVelho1 < vetIDADE[i]){
            maisVelho1 = vetIDADE[i]
            maisVelho2 = vetNOME[i]
        }
    }

    if(vetIDADE.length < 1 || vetIDADE[0] < 0){
        console.log("Nenhum valor válido informado")
    }
    else{
        console.log(`Mais velho: ${maisVelho2} com ${maisVelho1} anos.`)
        console.log(`Mais novo: ${maisNovo2} com ${maisNovo1} anos.`)
    }
    
}

function principal15(){
    let vetIDADE = []
    let vetNOME = []
    for(i=0;i<10;i++){
        vetIDADE[i] = Number(prompt(`IDADE [${i+1}]: `))
        if (vetIDADE[i] < 0){
            break;
        }
        vetNOME[i] = prompt(`NOME [${i+1}]: `)
    }
    ex15(vetIDADE, vetNOME)
}