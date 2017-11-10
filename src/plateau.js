export default class Plateau {
    constructor(nbCaseHorizontal, nbCaseVertical, tresors, montagnes, aventuriers) {
        this.nbCaseHorizontal = nbCaseHorizontal;
        this.nbCaseVertical = nbCaseVertical;
        this.tresors = tresors;
        this.montagnes = montagnes;
        this.aventuriers = aventuriers;
    }
    
    toString() {
        return "C - " + this.nbCaseHorizontal + " - " + this.nbCaseVertical;
    }

    positionSurPlateau(futurPosition) {
        if (futurPosition.x < 0 || futurPosition.x > this.nbCaseHorizontal)
            return false;
        if (futurPosition.y < 0 || futurPosition.y > this.nbCaseVertical)
            return false;
        return true;
    }

    positionIsMontagne(position) {
        for (var montagne in this.montagnes) {
            if (montagne.x == position.x && montagne.y == position.y) return true;
        }
        return false;
    }

    positionContientUnTresor(position) {
        for (let tresor of this.tresors) {
            if (tresor.x == position.x && tresor.y == position.y && tresor.contientTresor()) return tresor;
        }
        return null;
    }

    positionEstPrise(position, firstName) {
        for (let aventurier of this.aventuriers) {
            if (aventurier.estSurCettePosition(position) && aventurier.firstName != firstName) return true;
        }
        return false;
    }

    deplacerAventuriers() {
        let nbAventuriers = this.aventuriers.length;
        var nbAventuriersFinish = 0;
        var iterator = 0;

        while (nbAventuriersFinish < nbAventuriers) {

            var currentAventurier = this.aventuriers[iterator];
            if (currentAventurier.deplacementDisponible()) {

                var futurPosition = currentAventurier.nextPosition();
                // Si la position est executable
                if (this.positionSurPlateau(futurPosition) && !this.positionIsMontagne(futurPosition)) {
                    // SI la position n'est pas prise par un autre aventurier
                    if (!this.positionEstPrise(futurPosition, currentAventurier.firstName)) {
                        var isAvancer = currentAventurier.effectuerDeplacement();

                        // Si on change de position alors on regarde si on peut rammaser un trésors.
                        if (isAvancer) {
                            var positionTresor = this.positionContientUnTresor(futurPosition);
                            if (positionTresor && positionTresor.nbTresor > 0) {
                                currentAventurier.ramasserTresors(1);
                                positionTresor.enleverTresor();
                            }
                        }
                    }
                } else {
                    currentAventurier.ignoreNextDeplacement();
                }
                //break;
                if (!currentAventurier.deplacementDisponible()) {
                    nbAventuriersFinish++;
                }

            }

            iterator++;
            if (iterator == nbAventuriers) iterator = 0;
        }
    }

}