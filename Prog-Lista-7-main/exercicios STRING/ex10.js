//10.	Receba do usua´rio uma string. O programa imprime a string sem suas vogais.
let ex10 = (str) => {
    let nova_str = str.replace(/a/g, "").replace(/e/g, "").replace(/i/g, "").replace(/o/g, "").replace(/u/g, "")
    console.log(nova_str)
}
ex10(prompt("String: "))
