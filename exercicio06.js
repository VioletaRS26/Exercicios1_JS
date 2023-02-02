function peso_ideal (altura, sexo){
    if(sexo == "f"){
        return (62.1 * altura) - 44.7 ;
    } else if (sexo == "m"){
        return (72.7 * altura) - 58 ;
    }else{
        return "Sexo não identificado";
    }
}
console.log(peso_ideal(1.80, "f"));