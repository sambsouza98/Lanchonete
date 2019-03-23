module.exports = () => {
    function getIngredientes(ingrediente = null){

        let ingredientes = [
            {id: 1, nome: 'Alface', valor: 0.40 },
            {id: 2, nome: 'Bacon', valor: 2.00},
            {id: 3, nome: 'Hambúrguer', valor: 3.00},
            {id: 4, nome: 'Ovo', valor: 0.80},
            {id: 5, nome: 'Queijo', valor: 1.50},
        ];

        if(ingrediente){
            let dadosIngrediente = ingredientes.find(ing => ing.nome === ingrediente);
            return dadosIngrediente ? dadosIngrediente : {};
        }

        return ingredientes;
    }

    return getIngredientes;
}