/*
* Funcao que recebe um array de ids de ingredientes (lanche) e retorna um boolean indicando se o lanche é ou não light
* Para o lanche ser light ele deve possuir alface (id do ingrediente 1) e não incluir bacon (id do ingrediente 2);
* */

const ALFACE = 1;
const BACON = 2;

module.exports = () => {
    function isLight(idsIngredientes){
        return (idsIngredientes.includes(ALFACE) && !idsIngredientes.includes(BACON));
    }

    return isLight;
}