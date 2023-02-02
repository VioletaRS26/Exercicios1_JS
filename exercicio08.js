function preco_final(preco, paga){
    if(paga == 1){
        valor = preco -(preco * 15/100);
        return valor.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});
    }else if(paga == 2){
        valor = preco -(preco * 10/100);
        return valor.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});
    }else if(paga == 3){
        valor = preco -(preco * 5/100);
        return valor.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});
    }else if(paga == 4){
        return preco.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});
    }else{
        return "Opção não encontrada";
    }
}
console.log(preco_final(100,4));