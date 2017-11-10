import Case from './case';

export default class Montagne extends Case{
    constructor(x, y) {
        super(x, y);
        this.montagne = true;
    } 
    
    toString() {
        return "M" + " - " + super.toString();
    }
}