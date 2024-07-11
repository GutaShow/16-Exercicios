function triangulocal(){
    let n1, n2, n3, num1, num2, num3, calculo, outro

    n1 = document.getElementById('texto1')
    num1 = Number(n1.value)
    console.log(num1)


    calculo = (num1* 1.8 )+32

    outro = document.getElementById('res')
    outro.innerText = calculo

}