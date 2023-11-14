//21.	Dada uma string, diga se ela e´  um pal´ındromo ou na˜o.  Lembrando que um pal´ındromo e´  uma palavra que tenha a 
//propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. Exemplo:
//ovo 
//arara
//Socorram-me,  subi  no  ^onibus  em  Marrocos. 
//Anotaram a data da maratona

let ex21 = (str) => {
    let nova_str = str.split('').reverse().join('')
    if(str == nova_str){
        console.log("É um palíndromo")
    }
    else{
        console.log("Não é um palíndromo")
    }
}
ex21(prompt("String: "))