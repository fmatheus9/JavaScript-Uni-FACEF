//12.	Ler uma frase e contar quantos caracteres sa˜o espac¸os em brancos.   

let ex12 = (str) => {
    let contador = 0
    for(i=0;i<str.length;i++){
        if(str[i] == ' '){
            contador++
        }
    }
    console.log(contador)
}
ex12(prompt("String: "))
