//23.	Leia duas strings, str1 e str2, e um valor inteiro positivo N. 
//Concatene na˜o mais que N caracteres da string str2 a` string str1 e termine str1 com ‘\0’.

let ex23 = (str1, str2, n) => {
    nova_str = str1+str2.slice(0,n)
    console.log(nova_str)
}
ex23(str1 = prompt("STR 1: "),str2 = prompt("STR 2: "), n = Number(prompt("N: ")))