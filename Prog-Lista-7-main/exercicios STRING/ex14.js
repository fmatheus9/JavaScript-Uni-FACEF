//14.	Fac¸a um programa em que troque todas as ocorreˆncias de uma letra L1 pela letra L2 em uma string. 
//A string e as letras L1 e L2 devem ser fornecidas pelo usua´rio.

let ex14 = (str) => {
    let l1 = prompt("L1: ")
    let l2 = prompt("L2: ")
    let nova_str = str.replaceAll(l1, l2)
    console.log(nova_str)
}
ex14(prompt("String: "))

