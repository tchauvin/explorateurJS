export default class Axe {
    constructor(axe) {
        this.axe = axe;
    }
    
}

Axe.getAxe = function (str) {
    const axes = {
        'N': Axe.N,
        'S': Axe.S,
        'E': Axe.E,
        'O': Axe.O
    }
    return axes[str];
};

Axe.N = new Axe("N");
Axe.O = new Axe("O");
Axe.E = new Axe("E");
Axe.S = new Axe("S");

Axe.N.deplacer = function (mouvement, injectMouvement) {
    switch (mouvement) {
    case injectMouvement.A:
        {
            return Axe.N;
        }
    case injectMouvement.G:
        {
            return Axe.O;
        }
    case injectMouvement.D:
        {
            return Axe.E;
        }
    };
};

Axe.O.deplacer = function (mouvement, injectMouvement) {
    switch (mouvement) {
    case injectMouvement.A:
        {
            return Axe.O;
        }
    case injectMouvement.G:
        {
            return Axe.S;
        }
    case injectMouvement.D:
        {
            return Axe.N;
        }
    };
};

Axe.E.deplacer = function (mouvement, injectMouvement) {
    switch (mouvement) {
    case injectMouvement.A:
        {
            return Axe.E;
        }
    case injectMouvement.G:
        {
            return Axe.N;
        }
    case injectMouvement.D:
        {
            return Axe.S;
        }
    };
};

Axe.S.deplacer = function (mouvement, injectMouvement) {
    switch (mouvement) {
    case injectMouvement.A:
        {
            return Axe.S;
        }
    case injectMouvement.G:
        {
            return Axe.E;
        }
    case injectMouvement.D:
        {
            return Axe.O;
        }
    };
};