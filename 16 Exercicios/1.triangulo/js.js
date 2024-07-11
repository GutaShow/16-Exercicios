function triangulocal(){
    let n1, n2, num1, num2, calculo, outro

    n1 = document.getElementById('texto1')
    num1 = Number(n1.value)
    console.log(num1)
    n2 = document.getElementById('texto2')
    num2 = Number(n2.value)
    console.log(num2)
    calculo = (num1*num2)/2
    outro = document.getElementById('res')
    outro.innerText = calculo

}