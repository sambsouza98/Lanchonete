/*
* Funcao que recebe um objeto ingredientes e retorna a quantidade de carnes que nao serao cobradas sabendo que a regra é: a cada 3 carnes 1 sai de graça.
* */

const {HAMBURGUER} = require('../enums/ingredientes');

module.exports = () => {
    function muitaCarne (ingredientes){
        return Math.floor((ingredientes[HAMBURGUER].quantidade)/3);
    }
    return muitaCarne;
}