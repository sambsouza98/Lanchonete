const {lanches} = require('../mocks/lanches');

module.exports = () => {
    function getLanches(lanche = null){

        if(lanche){
            lanche = parseInt(lanche);
            let dadosLanche = lanches.filter(lanc => lanc.id === lanche);

            return dadosLanche ? dadosLanche[0] : {};
        }

        return lanches;
    }

    return getLanches;
}