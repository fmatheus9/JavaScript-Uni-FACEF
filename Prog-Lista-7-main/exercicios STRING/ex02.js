//2.Ler um nome e imprima o nome somente se a primeira letra do nome for ‘a’ (maiu´scula ou minu´scula).

let ex02 = (str) => {
    if(str[0] == 'a' || str[0] == 'A'){
        console.log(str)
    }
}
ex02(prompt("Informe um nome: "))
