const lanches = require('../mocks/lanches');

module.exports = () => {
    function getLanches(lanche = null){

        if(lanche){
            lanche = parseInt(lanche);
            let dadosLanche = lanches.find(lanc => lanc.id === lanche);

            return dadosLanche ? dadosLanche : {};
        }

        return lanches;
    }

    return getLanches;
}