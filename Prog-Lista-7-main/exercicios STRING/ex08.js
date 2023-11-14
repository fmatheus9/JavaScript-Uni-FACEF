//8.	Substitui as ocorreˆncias de um caractere ‘0’ em uma string por outro caractere ‘1’.

let ex08 = (str) => {
    let nova_str=''
    nova_str = str.replace(/0/g, "1") // substitui o "0" por "1"
    console.log(nova_str)
}
ex08(prompt("String: "))
