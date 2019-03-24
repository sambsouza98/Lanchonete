/*
* Funcao que recebe um id de ingredientes e retorna a quantidade de carnes que nao serao cobradas.
* */

const CARNE = 3;

module.exports = () => {
    function muitaCarne (idsIngredientes){
        let qtdeCarne = 0;

        idsIngredientes.forEach(idIngrediente => {
            if(idIngrediente === CARNE)
                qtdeCarne++;
        })

        return Math.floor(qtdeCarne/3);
    }
    return muitaCarne;
}