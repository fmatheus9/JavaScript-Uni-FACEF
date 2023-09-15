function ex03(){
  cont = 1
  ft1 = 0
  ft2 = 0
  ft3 = 0
  ft4 = 0
  ft5 = 0
  while(cont <= 8){
    let idade = Number(prompt("Informe a idade "+cont))
    cont++
  
    if (idade <= 15) {
      ft1++
    } 
    else if (idade > 15 && idade <= 30) {
      ft2++
    } 
    else if (idade > 30 && idade <= 45) {
      ft3++
    }
    else if((idade>46) && (idade<=60)){
      ft4++
    }
    else if((idade>60)){
      ft5++
  }
}
  console.log("A= 1ª: "+ft1+", 2ª: "+ft2+", 3ª: "+ft3+", 4ª: "+ft4+ ", 5ª: "+ft5)
  console.log("B= "+(ft1*100)/8+"%")
  console.log("C= " + (ft5 * 100) / 8+"%")
}

function ex04(){
  x = Number(prompt("Informe um número: "))
  cont = 1
  while(cont <= 10){
    console.log(x +" x "+ cont + " = "+ x*cont)
    cont++
  }
}

function ex05(){
  n1 = 1
  n2 = 2
  n3 = 3
  n4 = 4
  n5 = 5
  n6 = 6
  n7 = 7 
  n8 = 8 
  n9 = 9 
  n10 = 10
  cont = 1
  while(cont <=10){
    console.log(n1 + " x " + cont + " = " + n1 * cont)
    console.log(n2 + " x " + cont + " = " + n2 * cont)
    console.log(n3 + " x " + cont + " = " + n3 * cont)
    console.log(n4 + " x " + cont + " = " + n4 * cont)
    console.log(n5 + " x " + cont + " = " + n5 * cont)
    console.log(n6 + " x " + cont + " = " + n6 * cont)
    console.log(n7 + " x " + cont + " = " + n7 * cont)
    console.log(n8 + " x " + cont + " = " + n8 * cont)
    console.log(n9 + " x " + cont + " = " + n9 * cont)
    console.log(n10 + " x " + cont + " = " + n10 * cont)
    cont++
  }
}

function ex01(){
  cont = 1
  while(cont <= 5){
    let a =Number(prompt("Valores de A" + cont + ":"))
    let b = Number(prompt("Valores de B" + cont + ":"))
    let c = Number(prompt("Valores de C" + cont + ":"))
    let d = Number(prompt("Valores de D" + cont + ":"))
    cont++
  }
  

}

function ex02(){
  cont = 5
  let ingressos = 120
  let desp = 200
  while(cont>=1){
    let lucro = cont * ingressos - desp
    console.log("A R$"+cont+" e " + ingressos + " ingressos " + " = "+ lucro)
    cont = cont - 0.5
    ingressos = ingressos + 26
  }
}

function ex07(){
  cont = 1
  let peso = 0
  let idade = 0
  let media = 0
  m = 0
  while (cont<=5){
    let x = Number(prompt("Informe o peso "+cont))
    let y = Number(prompt("Informe a idade " + cont))
    let z = Number(prompt("Informe a altura " + cont))
    cont++
    if (y >50){
      idade ++
    }
    if (y > 10 && y < 20){
      media = (media + z)
      m++

    }
    if(x < 40){
      peso ++
    }
  }
  alert("A = "+idade+ " B = "+media/m+" C = "+ peso*5/100)

}

function ex08(){
  //idade, peso, altura, cOlhos, cCabelo
  let questao1 = 0
  let questao2 = 0
  let media = 0
  let cOlhos = 0
  let cCabelo = 0
  for(cont = 1; cont <=6; cont++){
    let A = Number(prompt(`Informe a idade ${cont}: `))
    let B = Number(prompt(`Informe o peso ${cont}: `))
    let C = Number(prompt(`Informe a altura (metros) ${cont}: `))
    let D = prompt(`Informe a cor dos olhos (A-azul, P-preto, V-verde e C-castanho) ${cont}: `).toUpperCase
    let E = prompt(`Informe a cor do cabelo (P-preto, C-castanho, L-loiro, R-ruivo) ${cont}: `).toUpperCase

      if(A>50 && B<60){
        questao1++
      }
      if(C<1,50){
        media = media + idade
        questao2++
      }
      if(D=="A"){
        cOlhos++
      }
      if(E=="R" && D!="A"){
        cCabelo++
      }    
  }

  alert(`Qauntidade de pessoas com idade superior a 50 e peso inferior a 60kg: ${questao1}`)
  alert(`A média das idades de pessoas com a altura inferior a 1,50m: ${media/questao2}`)
  alert(`A porcentagem de pessoas com olhos azuis entre todos os analisados: ${cOlhos/6}`)
  alert(`Quantidade de pessoas ruivas com olhos não azuis: ${cCabelo}`)
}

function ex09(){
  let idade = 0
  let peso = 0
  let altura = 0
  for(cont=1;cont<=10;cont++){
    let x = Number(prompt(`Informe a idade ${cont}: `))
    let y = Number(prompt(`Informe o peso ${cont}: `))
    let z = Number(prompt(`Informe a altura ${cont}: `))

    idade = idade+x

    if(y> 90 && z<1,50){
      peso++
    }

    if(x>=10 && x<=30 && z>1,90){
      altura ++
    }

  }
  alert(idade/10)
  alert(peso)
  alert(altura*10/100)
}

function ex10(){
  amcP = 0
  acmPrimo = 0
  for(cont=1;cont<=10;cont++){
    let n = Number(prompt(`Informe o ${cont}º número: `))
    if(n%cont==0){
      amcP = amcP+n
    }
    //"2, 3, 7, 11, 13, 17, 19, 23, 29, 31"
    if(n%cont!=0){
      acmPrimo = acmPrimo+n
    }
  }
  alert(amcP)
  alert(acmPrimo)
}

function ex21(){
  let codigo
  let cont1 = 0; let cont2 = 0; let cont3 = 0;let cont4 = 0;let cont5 = 0;let cont6 = 0; let cont7 = 0
  do{
    codigo = Number(prompt("Informe o código da votação: \n1 - Candidato 1.\n2 - Candidato 2.\n3 - Candidato 3.\n4 - Candidato 4.\n5 -  Voto nulo.\n6 - Voto em branco.\n0 - Encerrar contagem."))
    switch(codigo){
      case 0: 
      alert("Contagem encerrada.")
      case 1:
        cont1++;break
      case 2:
        cont2++;break
      case 3:
        cont3++;break
      case 4:
        cont4++;break
      case 5: 
        cont5++;break
      case 6:
        cont6++;break
      default:
        alert("Código inválido.")
    } 
    cont7++
  }while(codigo!=0)
  alert("Total de votos: "+cont7)
  alert(`Quantidade de votos do primeiro candidato: ${cont1}\nQuantidade de votos do segundo candidato: ${cont2}\n
  Qauntidade de votos do terceiro candidato: ${cont3}\nQunatidade de votos do quarto candidato: ${cont4}\n
  Quantidade de votos nulos: ${cont5}\nQuantidade de votos em branco: ${cont6}`)
  alert(`Porcentagem de votos nulos sobre o total de votos: ${(cont5*100/cont7).toFixed(2)}%`)
  alert(`Porcentagem de votos brancos sobre o total de votos: ${(cont6*100/cont7).toFixed(2)}%`)
}

function ex23(){
  let opcao
  do{
    opcao = Number(prompt("Menu de opções: \n1-Novo salário.\n2-Férias.\n3-Décimo terceiro.\n4-Sair."))
    switch(opcao){
      case 1:
        let salario = Number(prompt("Informe o salário atual: "))
        let nsalario
        if(salario<210){
          nsalario = salario/100*15
          alert(`Novo salário com o aumento de 15% = ${nsalario+salario}`)
        }
        else if(salario >= 210 && salario < 600){
          nsalario = (salario / 100) * 10
          alert(`Novo salário com o aumento de 10% = ${nsalario+salario}`)
        }
        else{
          nsalario = (salario / 100) * 5
          alert(`Novo salário com o aumento de 5% = ${nsalario+salario}`)
        };break
      
      case 2: 
        let salariof = Number(prompt("Informe o salario: "))
        let salariofe
        salariofe = salariof+ (1/3*salariof)
        alert(`Salário durante as férias: R$${(salariofe).toFixed(2)}`);break

      case 3: 
      let sala = Number(prompt("Informe o salário: "))
      let mes = Number(prompt("Informe o número de meses trabalhados no ano: "))
      let decter = sala*mes/12
      alert("Décimo terceiro: R$"+(decter).toFixed(2));break

      case 4:
        alert("Programa finalizado.");break

      default:
        alert("Valor inválido.")
    }
  }
  while(opcao!=4)
}   