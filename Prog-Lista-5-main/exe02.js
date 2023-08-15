//Faça um programa que solicite ao usuário entrar com os valores a, b, c. O programa deve calcular e mostrar o delta da equação.

//declara o objeto e inicialza os valores
let obj={
    a:Number(prompt(`Informe o valor de A:`)),
    b:Number(prompt(`Informe o valorde B:`)),
    c:Number(prompt(`Informe o valor de C: `)),
    delta:0
}
//calcula o delta
delta=(obj.b*obj.b)-4*obj.a*obj.c //ou obj.b**2-4*obj.a*obj.c
console.log(`Valor de delta: ${delta}`)