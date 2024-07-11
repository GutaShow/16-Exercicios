function frutas(){
    var fruta, resposta

    fruta = document.getElementById('text')

    fruta = fruta.value.toLowerCase()
    console.log(fruta)

    resposta = document.getElementsByTagName('h2')[0]
    console.log(resposta)

    

    switch (fruta){
        case "uva":
            resposta.innerHTML = 'Suco'
        break;
        case "laranja":
            resposta.innerHTML = 'Suco'
        break;
        case "limão":
            resposta.innerHTML = 'Suco'
        break;
        case "abacaxi":
            resposta.innerHTML = 'Suco'
        break;
        case "maracujá":
            resposta.innerHTML = 'Suco'
        break;
        case "manga":
            resposta.innerHTML = 'Suco'
        break;
        case "banana":
            resposta.innerHTML = 'Vitamina'
        break;
        case "mamão":
            resposta.innerHTML = 'Vitamina'
        break;
        case "melão":
            resposta.innerHTML = 'Vitamina'
        break;
        case "pêssego":
            resposta.innerHTML = 'Vitamina'
        break;
        case "abacate":
            resposta.innerHTML = 'Vitamina'
        break;
         
        default:
            resposta.innerHTML = 'Procure um nutricionista'
        
    }

}