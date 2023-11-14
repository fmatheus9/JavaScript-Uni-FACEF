//ARMAZENAR E MANIPULAR TEXTOS 

let text = "John Doe";
let carName1 = "Volvo XC60";  // Double quotes - ASPAS DUPLAS;
let carName2 = 'Volvo XC60';  // Single quotes - ASPAS SIMPLES;

//PODE COLOCAR ASPAS DENTRO DA STING, SEJAM ELAS DIFERENTES DAS UTILIZADAS NA STING
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer1)
console.log(answer2)
console.log(answer3)

//ESCAPE
let text3 = "We are the so-called \"Vikings\" from the north."; // colocar as barras invertidas antes das aspas faz possivel colocar aspas igauis a da sting
console.log(text3)


let x = "John";
//y é um obj e string é uma classe
let y = new String("John"); //outra forma de criar stings. 
console.log(x==y)
console.log(x===y) // === exatamente igual 


//              JavaScript String Methods               //

//COMPRIMEITO DA STING
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length; // mostra a quantidade de caracteres dentro da sting
console.log(length)

//JavaScript String slice()
let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13); // extrai uma parte da string e retorna uma nova sting, a posição inicial e a final sendo que a final nao esta incluida
console.log(part)
let part2 = text2.slice(7); // se omitir a segunda parte mostra o resto da string, se o parametro é negativo, comeca o indice no final
console.log(part2)

//JavaScript String substring()
let str = "Apple, Banana, Kiwi";
let part4 = str.substring(7, 13);
console.log(part4)

//JavaScript String substr() - entra com o valor inicial e quantos mais vao ser executados.
let str2 = "Apple, Banana, Kiwi";
let part5 = str2.substr(7, 6);

//Replacing String Content - The replace() method replaces a specified value with another value in a string
let text6 = "Please visit Microsoft!";
let newText = text6.replace("Microsoft", "W3Schools");
console.log(newText)
//O replace()método não altera a string em que é chamado.
//O replace()método retorna uma nova string.
//O replace()método substitui apenas a primeira correspondência
//Por padrão, o replace()método substitui apenas a primeira correspondência:
//Para substituir todas as correspondências, use uma expressão regular com um /gsinalizador (correspondência global):
let text7 = "Please visit Microsoft and Microsoft!";
let newText3 = text7.replace(/Microsoft/g, "W3Schools");

//JavaScript String concat() - concat() joins two or more strings:
let text8 = "Hello";
let text9 = "World";
let text10 = text8.concat(" ", text9);
console.log(text10)

//JavaScript String trimStart() - tira os espaços antes e dps
let text12 = "     Hello World!     ";
let text13 = text12.trimStart();
console.log(text13)

//JavaScript String charAt() - The charAt() method returns the character at a specified index (position) in a string:
let text14 = "HELLO WORLD";
let char = text14.charAt(0);
console.log(char)

//JavaScript String split() - A string can be converted to an array with the split() method:
let nomeCompleto = "Jose da silva e silva"
let vetor = nomeCompleto.split(" ")
console.log(vetor)

//JavaScript String indexOf() - The indexOf() method returns the index (position) the first occurrence of a string in a string:
let text21 = "Please locate where 'locate' occurs!";
let index = text21.indexOf("locate");
console.log(index)
let text31 = "Please locate where 'locate' occurs!";
let index2 = text31.lastIndexOf("locate");
console.log(index2)

//JavaScript String search() - The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let text41 = "Please locate where 'locate' occurs!";
text41.search("locate");


//Correspondência de string JavaScript() - O match()método retorna uma matriz contendo os resultados da correspondência de uma string com uma string (ou uma expressão regular).
let text75 = "The rain in SPAIN stays mainly in the plain";
text75.match("ain");
