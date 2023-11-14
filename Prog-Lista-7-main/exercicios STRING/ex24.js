//24.	Leia duas cadeias de caracteres A e B. Determine quantas vezes a cadeia A ocorre na cadeia B.

let ex23 = (str1, str2) => {
    let x1 = str1.split('')
    let x2 = str2.split('')
    console.log(x1)
    console.log(x2)
    let cont = 0
    for(i=0;i<x2.length;i++){
        for(j=0;j<x1.length;j++){
            if(x1[j] == x2[i]){
                cont++
            }
        }
    }
    console.log(cont)
}
ex23(str1 = prompt("STR 1: "),str2 = prompt("STR 2: "))