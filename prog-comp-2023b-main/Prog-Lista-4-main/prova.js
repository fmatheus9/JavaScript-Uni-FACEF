function prova(){
    let tit=[]; let descrição = []; let usuario=[]; let likes=[] // delcaração de variáveis
    for(let i=0;i<3;i++){
        usuario[i]=Number(prompt(`Informe o código do ${i+1}º usuário: `))
        tit[i]=prompt(`Informe o título: `)
        descrição[i]=prompt(`Informe a descrição: `)
        likes[i]=Number(prompt(`Informe a quantidade de likes: `))
    }
    let achou = false
    let autor
    let mudanca
    let diminuir 
    let qnt = 0
    let j=0
        while(j<5){ // o programa deve permitir que se façam 5 mudanças nos posts
        autor=Number(prompt(`Informe o código de usuário para a alteração nos posts: `))
        for(let i=0;i<5;i++){
            if(autor==usuario[i]){
                achou=true //VERIFICA SE O CÓDIGO EXISTE//
                mudanca=prompt("Informe se a mudança vai aumentar ou diminuir a quantidade de likes (DIMINUIR/AUMENTAR)")
                if(mudanca=='AUMENTAR'){
                    qnt=Number(prompt("Informe a quantidade: "))
                    likes[i] = likes[i] + qnt
                }
                else if(mudanca=='DIMINUIR'){
                    qnt=Number(prompt("Informe a quantidade: "))
                    if(qnt>diminuir){ //caso a quantidade a ser diminuida seja menor que a quantidade total de likes
                        console.log("A quantidade a ser subtraida deve ser menor que o total de likes.")
                    }
                    else if(diminuir>0){
                        likes[i] = likes[i]- qnt
                    }
                }
            }
            if(!achou){
                console.log(`Código inválido`)
            }
        }
        j++
    }
        let maiorlikes=likes[0] //assume que a maior quantidade de likes é a informada no vetor 0
        let menorlikes=likes[0] 
        for(let i=0;i<10;i++){
            if(likes[i]> maiorlikes){
                maiorlikes=likes[i]
            }
            if(likes[i]<menorlikes){
                menorlikes=likes[i]
            }
        }
        
        let maiortit = tit[likes.indexOf(maiorlikes)] // o maiortit recebe o valor de titulo na posição de indice do maior quantidade de likes
        let maiordesc = descrição[likes.indexOf(maiorlikes)]
        let menortit = tit[likes.indexOf(menorlikes)]
        let menordesc = descrição[likes.indexOf(menorlikes)]
        console.log(maiorlikes)
        console.log(menorlikes)
        console.log(`Titulo e Descrição do post com maior quantidade de likes: ${maiortit} / ${maiordesc} com ${maiorlikes}`)
        console.log(`Titulo e Descrição do post com menor quantidade de likes: ${menortit} / ${menordesc} com ${menorlikes}`)
}
