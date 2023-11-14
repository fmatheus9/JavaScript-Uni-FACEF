//22.Leia duas strings fornecidas pelo usua´rio e verifique se a se- gunda string lida esta contida no 
//final da primeira, retornando o resultado da verificac¸a˜o.

let ex22 = (str1, str2) => {
    if(str1.includes(str2)){
        console.log(`${str2} esta contido em ${str1}`)
    }
    else{
        console.log("Não esta contido")
    }
}
ex22(str1 = prompt("STR 1: "),str2 = prompt("STR 2: "))