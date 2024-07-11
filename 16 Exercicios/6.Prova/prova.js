function media(){
    let not1, not2, not3, not4, not5, nota1, nota2, nota3, nota4, nota5, resultado, calculo

    not1 = document.getElementById('nota1')
    nota1 = Number(not1.value)
    console.log(nota1)
    not2 = document.getElementById('nota2')
    nota2 = Number(not2.value)
    console.log(nota2)
    not3 = document.getElementById('nota3')
    nota3 = Number(not3.value)
    console.log(nota3)
    not4 = document.getElementById('nota4')
    nota4 = Number(not4.value)
    console.log(nota4)
    not5 = document.getElementById('nota5')
    nota5 = Number(not5.value)
    console.log(nota5)

    calculo = (nota1+nota2+nota3+nota4+nota5)/5
    console.log(calculo)
    
    resultado = document.getElementById('res')

    if (calculo >= 7){
        resultado.innerText = 'Parabenz, sua nota foi '+ calculo +'você passou!'
    }else{
        resultado.innerText = 'Infelizmente sua nota foi'+ calculo +'você reprovou :('
    }


}