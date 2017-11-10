export default class Axe {
    constructor(axe) {
        this.axe = axe;
    }
    
}

Axe.getAxe = function (str) {
        switch (str) {
        case "N":
            {
                return Axe.N;
            }
        case "S":
            {
                return Axe.S;
            }
        case "E":
            {
                return Axe.E;
            }
        case "O":
            {
                return Axe.O;
            }
        }; 
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