function soma(){
    let n1, num1, n2, num2, n3, num3, n4, num4, n5, num5, n6, num6, n7, num7, n8, num8, n9, num9, n10, num10, calculo, resultado

    n1 = document.getElementById('text1')
    console.log(n1)
    num1 = Number(n1.value)
    console.log(num1)
    n2 = document.getElementById('text2')
    num2 = Number(n2.value)
    console.log(num2)
    n3 = document.getElementById('text3')
    num3 = Number(n3.value)
    console.log(num3)
    n4 = document.getElementById('text4')
    num4 = Number(n4.value)
    console.log(num4)
    n5 = document.getElementById('text5')
    num5 = Number(n5.value)
    console.log(num5)
    n6 = document.getElementById('text6')
    num6 = Number(n6.value)
    console.log(num6)
    n7 = document.getElementById('text7')
    num7 = Number(n7.value)
    console.log(num7)
    n8 = document.getElementById('text8')
    num8 = Number(n8.value)
    console.log(num8)
    n9 = document.getElementById('text9')
    num9 = Number(n9.value)
    console.log(num9)
    n10 = document.getElementById('text10')
    num10 = Number(n10.value)
    console.log(num10)

    calculo = (num1+num2+num3+num4+num5+num6+num7+num8+num9+num10)

    resultado = document.getElementById('res')
    resultado.innerText = calculo
}

