/*
* Funcao que recebe um objeto de ingredientes (lanche) e retorna um boolean indicando se o lanche é ou não light
* Para o lanche ser light ele deve possuir alface (id do ingrediente 1) e não incluir bacon (id do ingrediente 2);
* */

const {ALFACE, BACON} = require('../enums/ingredientes');

module.exports = () => {
    function isLight(ingredientes){
        return (ingredientes[ALFACE].quantidade > 0 && ingredientes[BACON].quantidade === 0);
    }

    return isLight;
}