/*
* Funcao que recebe um objeto de ingredientes e retorna a quantidade de queijos que nao serao cobrados.
* */

const {QUEIJO} = require('../enums/ingredientes');

module.exports = () => {
    function muitoQueijo (ingredientes){
        return Math.floor((ingredientes[QUEIJO].quantidade)/3);
    }
    return muitoQueijo;
}