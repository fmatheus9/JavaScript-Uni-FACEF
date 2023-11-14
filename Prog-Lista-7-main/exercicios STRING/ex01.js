//1.calcula o comprimento de uma string (na˜o use a func¸a˜o strlen).

let ex01 = (str) => {
    let i = 0
    while(str[i] != undefined){
        i++
    }
    console.log(`Comprimento = ${i}`)
}
ex01("Francano")