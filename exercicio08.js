function preco_final(preco, paga){
    if(paga == 1){
        valor = preco -(preco * 15/100);
        return "R$ "+ valor + ",00";
    }else if(paga == 2){
        valor = preco -(preco * 10/100);
        return "R$ "+ valor + ",00";
    }else if(paga == 3){
        valor = preco -(preco * 5/100);
        return "R$ "+ valor + ",00";
    }else if(paga == 4){
        return "R$ "+ preco + ",00";
    }else{
        return "Opção não encontrada";
    }
}
console.log(preco_final(100,4));