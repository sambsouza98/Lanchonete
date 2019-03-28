const {ALFACE, BACON, OVO, QUEIJO, HAMBURGUER} = require('./ingredientes');

module.exports = {
    XBACON: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 0
            }, [BACON]: {
                quantidade: 1
            }, [HAMBURGUER]: {
                quantidade: 1
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 1
            }
        }
    },
    XBURGUER: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 0
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 1
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 1
            }}
    },
    XBURGUER3QUEIJOS: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 0
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 1
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 3
            }}
    },
    XBURGUER3QUEIJOSSALADA: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 1
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 1
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 3
            }}
    },
    XBURGUER3: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 0
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 3
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 1
            }}
    },
    XBURGUER3CARNESSALADA: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 1
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 3
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 1
            }}
    },
    XBURGUER3CARNES3QUEIJOS: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 0
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 3
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 3
            }}
    },
    XBURGUER3CARNES3QUEIJOSSALADA: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 1
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 3
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 3
            }}
    },
    XEGG: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 0
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 1
            }, [OVO]: {
                quantidade: 1
            }, [QUEIJO]: {
                quantidade: 1
            }}
    },
    XEGGBACON: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 0
            }, [BACON]: {
                quantidade: 1
            }, [HAMBURGUER]: {
                quantidade: 1
            }, [OVO]: {
                quantidade: 1
            }, [QUEIJO]: {
                quantidade: 1
            }}
    },
    XBURGUERSALADA: {
        ingredientes: {
            [ALFACE]: {
                quantidade: 1
            }, [BACON]: {
                quantidade: 0
            }, [HAMBURGUER]: {
                quantidade: 1
            }, [OVO]: {
                quantidade: 0
            }, [QUEIJO]: {
                quantidade: 1
            }}
    }
};
