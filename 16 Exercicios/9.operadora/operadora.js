function ope(){
    let n1, num1, valorSms

    n1 = document.getElementById('texto1')
    num1 = Number(n1.value)

    if(num1 <=75){
        valorSms = 5
    }else if(num1 > 75 && num1 <= 240){
        valorSms = ((num1-75)*0.05)+5
    }else{
        valorSms = ((num1-240)*0.10)+5
    }
    document.getElementById("res").innerText = valorSms
    console.log(valorSms)
}