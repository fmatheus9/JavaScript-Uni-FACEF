//20.	O co´digo de Ce´sar e´ uma das mais simples e conhecidas te´cnicas de criptografia. E´  um tipo de substituic¸a˜o na qual 
//cada letra do texto e´ substitu´ıda por outra, que se apresenta no alfabeto abaixo dela um nu´mero fixo de vezes.  
//Por exemplo, com uma troca de treˆs posic¸o˜es, ‘A’ seria substitu´ıdo por ‘D’, ‘B’ se tornaria ‘E’, e assim por diante. 
//Fac¸a uso desse Co´digo de Ce´sar (3 posic¸o˜es), entre com uma string e retorne a string codificada. Exemplo:
//String: a ligeira raposa marrom saltou sobre o cachorro cansado
//Nova string: D OLJHLUD UDSRVD PDUURP VDOWRX VREUH R FDFKRUUR FDQVDGR

let ex20 = () => {
    let str = prompt("String: ").toUpperCase()
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let aux = ''
    let novastr = ''
    let j = 0
    for(i=0;i<str.length;i++){
        while(str[i] != alfabeto[j]){
            j++
        }
        aux = alfabeto[j+3]
        novastr = novastr + aux    
    }
    console.log(novastr)
}
ex20()