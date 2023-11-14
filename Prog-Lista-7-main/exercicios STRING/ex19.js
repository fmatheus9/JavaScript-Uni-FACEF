//19.leia duas palavras e diga qual deles vem primeiro na ordem alfabe´tica. Dica: ‘a’ e´ menor do que ‘b’.

let ex19 = (str1, str2) => {
    let i = 0
    letra1 = str1[0]
    letra2 = str2[0]
    if(letra1<letra2){
        console.log(`A palavra que vem prieiro na ordem alfabética é ${str1}`)
    }
    else if(letra1>letra2){
        console.log(`A palavra que vem prieiro na ordem alfabética é ${strs}`)
    }
    else if(letra1 == letra2){ 
        do{
            i++
            letra1 = str1[i]
            letra2 = str2[i] 
            if(letra1<letra2){
                console.log(`A palavra que vem prieiro na ordem alfabética é '${str1}'`)
            }
            else if(letra1>letra2){
                console.log(`A palavra que vem prieiro na ordem alfabética é '${str2}'`)
            }
        }while(str1[i] == str2[i])
    }
}
ex19(str1 = prompt("String 1: "), str2 = prompt("String 2: "))
