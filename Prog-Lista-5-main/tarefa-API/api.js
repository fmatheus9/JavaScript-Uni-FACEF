async function buscarFilme(){
    let tilte = document.getElementById("Title").value
    let resposta = await fetch(`https://www.omdbapi.com/?apikey=44cb59cb&t=${tilte}`)
    let dados = await resposta.json()
    console.log(dados)
    if(dados.Response === 'False'){
        alert("Movie not found!")
    }
    else{
        document.getElementById('Year').value = dados.Year
        document.getElementById('Released').value = dados.Released
        document.getElementById('Runtime').value = dados.Runtime
        document.getElementById('Director').value = dados.Director  
        document.getElementById('Poster').src = dados.Poster 
    }  
}