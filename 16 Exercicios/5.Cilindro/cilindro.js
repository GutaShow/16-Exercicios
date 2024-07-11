function cilin(){
    let n1, num1, n2, num2, calculo, resultado

    n1 = document.getElementById('text1')
    num1 = Number(n1.value)
    console.log(num1)

    n2 = document.getElementById('text2')
    num2 = Number(n2.value)
    console.log(num2)

    calculo = (3.14 * (num1*num1)) * num2

    resultado = document.getElementById('res')
    resultado.innerText = calculo



}