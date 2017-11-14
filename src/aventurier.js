import Mouvement from './mouvement';
import Axe from './axe';
import Case from './case';

export default class Aventurier {
    constructor(firstName, position, axe, mouvements) {
        this.firstName = firstName;
        this.position = position;
        this.axe = axe;
        this.iteratorDeplacement = -1;
        this.nbTresor = 0;
        this.mouvement = mouvements;
    };
    
    deplacementDisponible() {
        if(this.iteratorDeplacement + 1 < this.mouvement.length) return true;
        return false;
    };
    
    estSurCettePosition(position) {
        if(this.position.x == position.x
          && this.position.y == position.y) return true;
        return false;
    };
    
    nextPosition() {
       let nextMouvement = this.mouvement[this.iteratorDeplacement + 1];
       var futurPosition = this.position;
        
        if(nextMouvement == Mouvement.A) {
            futurPosition = Mouvement.A.avancer(this.axe, this.position, Axe);
        } else {
        }
        return futurPosition;
    };
    
    ignoreNextDeplacement() {
        this.iteratorDeplacement++;
    };
    
    ramasserTresors(nb) {
        this.nbTresor += nb;
    };
    
    effectuerDeplacement() {
        // Recupérer le prochain mouvement à éffectuer
        let nextMouvement = this.mouvement[this.iteratorDeplacement + 1];
        var futurPosition = this.position;
        var isMvtAvancer = false;
        
        if(nextMouvement == Mouvement.A) {
            // Si ce n'est pas une montagne effectuer le mouvement
            this.position = Mouvement.A.avancer(this.axe, this.position, Axe);
            isMvtAvancer = true;
        }  else {
            this.axe = this.axe.deplacer(nextMouvement, Mouvement);
        }
        this.iteratorDeplacement++;
        return isMvtAvancer;
    };
    
    toString() {
        var resultStr = "A - " + this.firstName + " - " + this.position.x + " - " + this.position.y + " - " + this.axe.axe + " - " + this.nbTresor
        return resultStr;
    };

}
