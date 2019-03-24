/*
* Funcao que recebe um id de ingredientes e retorna a quantidade de queijos que nao serao cobrados.
* */

const QUEIJO = 5;

module.exports = () => {
    function muitoQueijo (idsIngredientes){
        let qtdeQueijos = 0;

        idsIngredientes.forEach(idIngrediente => {
            if(idIngrediente === QUEIJO)
                qtdeQueijos++;
        })

        return Math.floor(qtdeQueijos/3);
    }
    return muitoQueijo;
}