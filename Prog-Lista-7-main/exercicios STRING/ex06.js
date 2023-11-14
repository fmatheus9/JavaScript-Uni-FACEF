//6.Compara duas strings (na˜o use a func¸a˜o strcmp).

let ex05 = (str1,str2) => {
    if(str1 == str2){
        console.log("São iguais.")
    }
    else{
        console.log("Não são iguais.")
    }
}

ex05(str1 = prompt("Palavra 1: "), str2 = prompt("Palavra 2: "))