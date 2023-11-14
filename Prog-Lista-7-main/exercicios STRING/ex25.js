//25.	Leia uma cadeia de caracteres no formato “DD/MM/AAAA” e copie o dia, meˆs e ano para 3 varia´veis inteiras. 
//Antes disso, verifique se as barras esta˜o no lugar certo, e se DD, MM e AAAA sa˜o nume´ricos.

let ex09 = (str) => {
    let dia = ''
    let mes = ''
    let ano = ''
    if(str.indexOf('/') != 2 && str.lastIndexOf('/') != 5){
        console.log("As barras não estão no lugar correto. ")
    }
    else{
        str.split('')
        for(i=0;i<str.length;i++){
            if(str.includes('0','1','2','3','4','5','6','7','8','9')){
                if(i == 0 || i == 1){
                    dia = dia.concat(str[i])
                }
                else if(i == 3 || i == 4){
                    mes = mes.concat(str[i])
                }
                else if(i>5){
                    ano =ano.concat(str[i])
                }
            }
            else{
                console.log("Entre apenas com números e barras. ")
                break;
            }
        }
        console.log(`DIA: ${dia}\nMES: ${mes}\nANO: ${ano}`)
    }
}
ex09(prompt("String: "))
