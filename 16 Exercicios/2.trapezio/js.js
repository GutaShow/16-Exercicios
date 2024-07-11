function triangulocal(){
    let n1, n2, n3, num1, num2, num3, calculo, outro

    n1 = document.getElementById('texto1')
    num1 = Number(n1.value)
    console.log(num1)
    n2 = document.getElementById('texto2')
    num2 = Number(n2.value)
    console.log(num2)
    n3 = document.getElementById('texto3')
    num3 = Number(n3.value)
    console.log(num3)

    calculo = ((num1+num2)*num3)/2

    outro = document.getElementById('res')
    outro.innerText = calculo

}