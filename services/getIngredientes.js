const {ingredientes} = require('../mocks/ingredientes');

module.exports = () => {
    function getIngredientes(idIngrediente = null){

        if(idIngrediente)
            return ingredientes[idIngrediente];

        return ingredientes;
    }

    return getIngredientes;
}