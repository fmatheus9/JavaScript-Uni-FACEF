//7.Conte o nu´mero de 1’s que aparecem em um string.  Exemplo: “0011001” -> 3

let ex07 = (str) => {
    let cont = 0
    for(i=0;i<str.length;i++){
        if(str[i] == '1'){
            cont++
        }
    }
    console.log(cont)
}
ex07(prompt("String: "))
