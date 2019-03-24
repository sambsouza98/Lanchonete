/*
* Funcao que recebe um id de ingredientes e retorna a quantidade de carnes que nao serao cobradas.
* */

const {HAMBURGUER} = require('../enums/ingredientes');

module.exports = () => {
    function muitaCarne (idsIngredientes){
        let qtdeCarne = 0;

        idsIngredientes.forEach(idIngrediente => {
            if(idIngrediente === HAMBURGUER)
                qtdeCarne++;
        })

        return Math.floor(qtdeCarne/3);
    }
    return muitaCarne;
}