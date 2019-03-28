const {lanches} = require('../mocks/lanches');
const {ingredientes} = require('../mocks/ingredientes');

module.exports = () => {
    function getLanches(idLanche = null){

        let cardapio = lanches.map(lanche => {
            // let ingredientesLanche = {...ingredientes};
            let ingredientesLanche = JSON.parse(JSON.stringify(ingredientes));

            lanche.ingredientes.forEach(ingrediente => ingredientesLanche[ingrediente].quantidade++)

            return {
                ...lanche,
                ingredientes: ingredientesLanche
            }
        })

        if(idLanche){
            let lanche = cardapio.filter(lanche => {
                return lanche.id == idLanche;
            })
            return lanche[0] ? lanche[0] : {};
        }

        return cardapio;
    }

    return getLanches;
}