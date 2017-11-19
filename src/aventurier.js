import Mouvement from './mouvement';
import Axe from './axe';
import Case from './case';

export default class Aventurier {
    constructor(firstName, position, axe, mouvements) {
        this.firstName = firstName;
        this.position = position;
        this.axe = axe;
        this.nbTresor = 0;
        this.mouvements = mouvements;
    };
    
    deplacementDisponible() {
        return (this.mouvements.length >= 1);
    };
    
    estSurCettePosition(position) {
        return (this.position.x == position.x
          && this.position.y == position.y);
    };
    
    nextPosition() {
       let nextMouvement = this.mouvements[0];
       var futurPosition = this.position;
        
        if(nextMouvement == Mouvement.A) {
            futurPosition = Mouvement.A.avancer(this.axe, this.position, Axe);
        }
        return futurPosition;
    };
    
    ignoreNextDeplacement() {
        this.mouvements.shift();
    };
    
    ramasserTresors(nb) {
        this.nbTresor += nb;
    };
    
    effectuerDeplacement() {
        // Recupérer le prochain mouvement à éffectuer
        let nextMouvement = this.mouvements.shift();
        var futurPosition = this.position;
        var isMvtAvancer = false;
        
        if(nextMouvement == Mouvement.A) {
            // Si ce n'est pas une montagne effectuer le mouvement
            this.position = Mouvement.A.avancer(this.axe, this.position, Axe);
            isMvtAvancer = true;
        }  else {
            this.axe = this.axe.deplacer(nextMouvement, Mouvement);
        }
        return isMvtAvancer;
    };
    
    toString() {
        var resultStr = "A - " + this.firstName + " - " + this.position.x + " - " + this.position.y + " - " + this.axe.axe + " - " + this.nbTresor
        return resultStr;
    };

}
