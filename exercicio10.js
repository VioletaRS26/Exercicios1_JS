function bhaskara(a, b, c){
  
    const delta = b * b - 4 * a * c;
  
    if (!a || !b || !c) {
      return ("Insira os valores de a, b e c");
    } else if (a == 0) {
      return("O valor de <strong>a</strong>, deve ser diferente de 0");
    } else if (delta < 0) {
      return array = [];
    }else if(delta == 0){
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return array = [x1];
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return array = [x1,x2];
    }
}
console.log(bhaskara(-3, 18, -15));
console.log(bhaskara(4, -12, 9));