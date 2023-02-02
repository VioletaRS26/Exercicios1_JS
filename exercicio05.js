function ordenar_3_numeros(n1, n2, n3){
    const array = [n1,n2,n3];

    function decrescente(a,b){
        return b - a;
    }
    console.log(array.sort(decrescente));
}
ordenar_3_numeros(7,4,8); 