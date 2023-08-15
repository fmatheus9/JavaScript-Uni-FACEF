
function exe1() {
  let n1 = Number(document.getElementById("n1").value)
  let n2 = Number(document.getElementById("n2").value)
  let n3 = Number(document.getElementById("n3").value)
  let n4 = Number(document.getElementById("n4").value)
  let aprovacao

  m = (n1 + n2 + n3 + n4) / 4

  if (m >= 7) {
    document.getElementById("m").innerHTML = m
    aprovacao = "Aprovado"
    document.getElementById("aprovacao").innerHTML = aprovacao
  } else {
    document.getElementById("m").innerHTML = m
    aprovacao = "Reprovado"
    document.getElementById("aprovacao").innerHTML = aprovacao
  }
}

function exe2(){
  let no1 = Number(document.getElementById("no1").value)
  let no2 = Number(document.getElementById("no2").value)
  let res 

  me = (no1+no2)/2

  if (me < 3){
    document.getElementById("me").innerHTML = me
    res = "Reprovado"
    document.getElementById("res").innerHTML = res
  }
  else{
    if (me >= 3 && me <7){
      document.getElementById("me").innerHTML = me
      res = "Exame"
      document.getElementById("res").innerHTML = res
    }
    else{
      document.getElementById("me").innerHTML = me
      res = "Aprovado"
      document.getElementById("res").innerHTML = res
    }
  }
}

function exe5() {
  // recupera nro1, nro2, escolha
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  let escolha = Number(document.getElementById("escolha").value)
  // vamos verificar o que o usuário escolheu
  let resultado
  switch (escolha) {
    case 1:
      resultado = (nro1 + nro2) / 2
      break // não entra nos cases de baixo
    case 2:
      if (nro1 >= nro2) {
        resultado = nro1 - nro2
      } else {
        resultado = nro2 - nro1
      }
      break
    case 3:
      resultado = nro1 * nro2
      break
    case 4:
      if (nro2 != 0) {
        resultado = nro1 / nro2
      } else {
        resultado = "Não pode dividir por zero"
      }
      break
    default:
      resultado = "Opção inválida"
  }
  // saída do dados
  document.getElementById("resultado").innerHTML = resultado
}
