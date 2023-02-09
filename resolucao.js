//Exercicio 01
const menor = (a, b, c) => a + b < c ;
console.log(menor(1,4,6));

//Exercicio 04
const dobro_triplo = n => (n < 0) ? n * 3  : n * 2; //Operador ternário
console.log(dobro_triplo(-4));

//Exercicio 07
const imc = (altura, peso) => {
    imc_calculado = peso/ altura ** 2;
    if(imc_calculado < 18.5){
        return "Baixo peso";
    }else if(imc_calculado < 25){
        return "Peso normal";
    }else if(imc_calculado < 30){
        return "Excesso de peso";
    }else if(imc_calculado < 35){ 
        return "Obesidade";
    }else{
        return "Obesidade extrema";
    }
}
console.log(imc(1.85, 110.2));

//Exercicio 10
const bhaskara = (a, b, c) => {
    const delta = b ** 2 - 4 * a * c;
    if(delta < 0){
        return [];
    }else if (delta == 0){
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        return [x1];
    }else{
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b + Math.sqrt(delta)) / (2 * a)
        return [x1, x2];
    }
}
console.log(bhaskara(-3, 18, -15));