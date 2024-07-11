function brech(){
    let n1, num1, calculo, resultado

    n1 = document.getElementById('text1')
    num1 = Number(n1.value)
    console.log(num1)

    if (num1 < 50){
        calculo = (num1*1.35)
    }else if (num1 >= 50 && num1 < 100){
        calculo = (num1*1.25)
    }else{
        calculo = (num1*1.15)
    }

    resultado = document.getElementById('res')
    resultado.innerText = calculo
        
}