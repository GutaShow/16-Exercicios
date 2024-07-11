function carro(){
    let n1, num1, calculo, resultado

    n1 = document.getElementById('text1')
    num1 = Number(n1.value)
    console.log(num1)

    calculo = ((num1*1.28)+num1*0.45)

    resultado = document.getElementById('res')
    resultado.innerText = calculo
}