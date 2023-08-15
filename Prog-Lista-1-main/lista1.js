function exe1(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    sub = (n1-n2)

    alert("O primeiro valor menos o segundo valor resulta em: " + sub)
}

function exe2(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    mult = (n1*n2*n3)

    alert("A multiplicação dos 3 valores é igual a: " + mult)
    
}

function exe3(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    divs = (n1/n2)

    alert("A divisão do primeiro valor pelo segundo é igual a: " + divs)
}

function exe4(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    media = ((n1*2+n2*3)/5)

    alert("A média ponderada das notas informadas é: " + media)
    
}

function exe5(){
    let preco = Number(document.getElementById("preco").value)

    desconto = (preco-preco*0.1)

    alert("Preço com o desconto de 10%: R$" + desconto)
    
}

function exe6(){
    //let declara uma variável
    //recupera o salario do usuário informado na caia de texto
    let salario = Number(document.getElementById("salario").value) //document.getElementById é para selecionasr os elementos pelo id
    // o "Number" converte o valor para numeros
    //recupera as vendas informadas na caixa de texto
    let vendas = Number(document.getElementById("vendas").value)

    //calcular a comissão
    let comissao = (vendas*0.04)
    //calcular o salario final
    let total = (comissao+salario)
    //alert aparece a mensagem na caixa de texto junto do valor da comissao e do total
    alert("Comissao: " + comissao + "\nSalário total: " + total)

    
}

function exe7(){
    let peso = Number(document.getElementById("peso").value)

    p15 = (peso+peso*0.15)
    p20 = (peso-peso*0.2)

    alert("Peso caso engorde 15%: " + p15 + "\nPeso caso emagreça 20%: " + p20)
    
}

function exe8(){
    let pesokg = Number(document.getElementById("pesokg").value)

    pesogramas = (pesokg*1000)

    alert("O peso informado convertido para Grama é igual a: " + pesogramas +"g")
    
}

function exe9(){
    let bMaior = Number(document.getElementById("bMaior").value)
    let bMenor = Number(document.getElementById("bMenor").value)
    let h = Number(document.getElementById("h").value)

    area = ((bMaior+bMenor)*h)/2

    alert("A área do trapézio é de: " + area +"cm²")
    
}

function exe10(){
    let l = Number(document.getElementById("l").value)

    area = (l*l)

    alert("A área do quadrado é de: "+ area +"cm²")
    
}

