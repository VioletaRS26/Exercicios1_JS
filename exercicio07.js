function imc(altura, peso){
    number = peso /(altura)**2;
    if(number < 18.5){
        return "Baixo peso";
    }else if(number > 18.5 && number <= 24.9){
        return "Peso normal";
    }else if(number > 25 && number <= 29.9){
        return "Excesso de peso";
    }else if(number > 30 && number < 35){
        return "Obesidade";
    }else{
        return "Obesidade extrema";
    }
}
console.log(imc(1.85, 110.2));