import Case from './case';

export default class Tresor extends Case {
    constructor(x, y, nbTresor) {
        super(x, y);
        this.tresor = true;
        this.nbTresor = parseInt(nbTresor);
    }
    
    enleverTresor() {
        if(this.nbTresor > 0) {
            this.nbTresor--;
        }
    }
    
    contientTresor() {
        if(this.nbTresor > 0) return true;
        return false;
    }
    
    toString() {
        return "T" + " - " + super.toString() + " - " + this.nbTresor;
    }
    
}