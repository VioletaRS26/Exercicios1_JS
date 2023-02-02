function ordenar_3_numeros(a, b, c){
    array = [a, b, c];
    function ordenar_decrescente(a, b){
        return b - a;
    }
    return (array.sort(ordenar_decrescente));
}
console.log(ordenar_3_numeros(6,3,8));