const {ingredientes} = require('../mocks/ingredientes');

module.exports = () => {
    function getIngredientes(ingrediente = null){

        if(ingrediente){
            let dadosIngrediente = ingredientes.filter(ing => ing.nome === ingrediente);
            return dadosIngrediente ? dadosIngrediente[0] : {};
        }

        return ingredientes;
    }

    return getIngredientes;
}