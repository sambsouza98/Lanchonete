const ingredientes = require('../mocks/ingredientes');

module.exports = () => {
    function getIngredientes(ingrediente = null){

        if(ingrediente){
            let dadosIngrediente = ingredientes.find(ing => ing.nome === ingrediente);
            return dadosIngrediente ? dadosIngrediente : {};
        }

        return ingredientes;
    }

    return getIngredientes;
}