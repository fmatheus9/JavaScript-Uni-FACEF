    //exemplo funcao foreach
    let memorias = [4,8,16,32,64, 128, 256]
    let saida = ''
    memorias.forEach((item) => saida = saida+item+"GB\n") // ForEach = para cada item do vetor faz oq pede ai. 
    console.log(saida)

    //exemplo funcao map
    let idade = [16,17,18,19,20,21]
    let dobrar = idade.map((item) => item*2) //retorna um vetor realizando a expressao desejada
    console.log(dobrar)

    //exemplo funcao reduce
    let notas = [2,4,1,8,7]
    let soma = notas.reduce((acumula, item) => acumula+item) // acumula / soma / realiza uma expressao 
    console.log(soma/notas.length)

    let nome = ["uga", "buga", "truga"]
    let novo_nome = nome.reduce((acumula, item) => acumula+item)
    console.log(novo_nome)

    //exemplo funcao filter / find / some
    let vetor = [2,3,4,5,6,7,8,9,4123,612,658]
    let pares = vetor.filter((item) => item % 2 == 0) //mostra todos q satisfazem
    console.log(pares)

    let par = vetor.find((item) => item % 2 == 0) //mostra o primeiro
    console.log(par)

    let p = vetor.some((item) => item % 2 ==0 ) // mostra se existe um que satisfaz 
    console.log(p)

    //quando um dado vem de um servidor web, uma api por exemplo, ela vem como string
    //precisamos converter essa str em objeto js
    let string = '{"nome":"Matheus","idade":"19"}'
    let objetoJS = JSON.parse(string)
    console.log(objetoJS)

    //quando o dado é enviado para o servidor web, ele vai como str
    //é preciso converter o obj em sring

    string = JSON.stringify(objetoJS)
    console.log(string)

    //operador spread ...
    let times = ["sp", "santos", "parmera"]
    console.log(...times)

    //comando for
    for(let time of times){
        console.log(time)
    }

    for(let time in times){
        console.log(time)
    }

