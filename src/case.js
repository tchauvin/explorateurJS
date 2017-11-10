export default class Case {
    constructor(x, y) {
        this.x = parseInt(x);
        this.y = parseInt(y);
    }
    
    toString() {
        return this.x + " - " + this.y;
    }
}