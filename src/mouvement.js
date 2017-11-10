import Case from './case';

export default class Mouvement {
    constructor(mouvement) {
        this.mouvement = mouvement;
    }
}

Mouvement.A = new Mouvement("A");
Mouvement.D = new Mouvement("D");
Mouvement.G = new Mouvement("G");

Mouvement.getMouvement = function (str) {
    switch (str) {
    case "A":
        {
            return Mouvement.A;
        }
    case "D":
        {
            return Mouvement.D;
        }
    case "G":
        {
            return Mouvement.G;
        }
    }; 
};

Mouvement.A.avancer = function (axe, position, injectAxe) {
    switch (axe) {
    case injectAxe.N:
        {
            return new Case(position.x, position.y - 1);
        }
    case injectAxe.S:
        {
            return new Case(position.x, position.y + 1);
        }
    case injectAxe.O:
        {
            return new Case(position.x - 1, position.y);
        }
    case injectAxe.S:
        {
            return new Case(position.x + 1, position.y);
        }
    };
};