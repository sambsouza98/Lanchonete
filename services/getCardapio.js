module.exports = () => {
    function getIngredientes(lanche = null){

        let Lanches = [
            {id: 1, Lanche: 'X-Bacon', ingredientes: [ 'Bacon', 'Hambúrguer', 'queijo' ] },
            {id: 2, Lanche: 'X-Burger', ingredientes: [ 'Hambúrguer', 'queijo' ]},
            {id: 3, Lanche: 'X-Egg', ingredientes: [ 'Ovo', 'hambúrguer', 'queijo' ]},
            {id: 4, Lanche: 'X-Egg Bacon', ingredientes: [ 'Ovo', 'bacon', 'hambúrguer', 'queijo' ]},
        ];

        if(lanche){
            lanche = parseInt(lanche);
            let dadosLanche = Lanches.find(lanc => lanc.id === lanche);

            return dadosLanche ? dadosLanche : {};
        }

        return Lanches;
    }

    return getIngredientes;
}