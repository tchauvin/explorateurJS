let chai = require('chai'),
    path = require('path');

chai.should();

let Case = require(path.join(__dirname, '../src/', 'case'));
let Montagne = require(path.join(__dirname, '../src/', 'montagne'));
let Tresor = require(path.join(__dirname, '../src/', 'tresor'));
let Aventurier = require(path.join(__dirname, '../src/', 'aventurier'));
let Mouvement = require(path.join(__dirname, '../src/', 'mouvement'));
let Axe = require(path.join(__dirname, '../src/', 'axe'));

describe('Case', () => {
        it('requires arguments', () => {

            let position;
            beforeEach(() => {
                position = new Case(10, 20, false, true, 1);
            });

            it('returns x', () => {
                position.x.should.equal(10);
            });
                
            it('returns y', () => {
                position.y.should.equal(20);
            });

        });

});

describe('Tresor', () => {
        it('requires arguments', () => {

            let position;
            beforeEach(() => {
                position = new Tresor(10, 20, 1);
            });

            it('returns x', () => {
                position.x.should.equal(10);
            });
                
            it('returns y', () => {
                position.y.should.equal(20);
            });
            
            it('returns isTresor', () => {
                position.tresor.to.be.true;
            });
            
            it('returns nbTresor', () => {
                position.nbTresor.should.equal(1);
            });
            
            it('returns isMontagne', () => {
                position.montagne.to.be.false;
            });

        });
        
        it('contient tresors', () => {

            let position;
            beforeEach(() => {
                position = new Case(10, 20, false, true, 1);
            });

            it('returns true', () => {
                position.contientTresor().to.be.true;
            });
            
        });
        
        it('contient plus aucun tresors', () => {

            let position;
            beforeEach(() => {
                position = new Case(10, 20, false, true, 0);
            });

            it('returns false', () => {
                position.contientTresor().to.be.false;
            });
            
        });
        
        it('enlever tresor', () => {

            let position;
            beforeEach(() => {
                position = new Case(10, 20, false, true, 1);
            });

            it('returns true', () => {
                position.contientTresor().to.be.true;
            });
            
            it('returns false', () => {
                position.enleverTresor()
                position.contientTresor().to.be.false;
            });
            
        });

});

describe('Montagne', () => {
        it('requires arguments', () => {

            let position;
            beforeEach(() => {
                position = new Montagne(10, 20);
            });

            it('returns x', () => {
                position.x.should.equal(10);
            });
                
            it('returns y', () => {
                position.y.should.equal(20);
            });
            
            it('returns isMontagne', () => {
                position.montagne.to.be.true;
            });

        });

});

describe('Mouvement', () => {
    it('Test getMouvement Str', () => {
        
        it('returns Mouvement.A', () => {
            var newMvt = Mouvement.getMouvement("A");
            newMvt.should.equal(Mouvement.A);
        });
        
        it('returns Mouvement.D', () => {
            var newMvt = Mouvement.getMouvement("D");
            newMvt.should.equal(Mouvement.D);
        });
        
        it('returns Mouvement.G', () => {
            var newMvt = Mouvement.getMouvement("G");
            newMvt.should.equal(Mouvement.G);
        });

    });
    
    it('Test Avancer', () => {

        let position;
        let mvt = Mouvement.A;
        beforeEach(() => {
            position = new Case(10, 20, false, true, 1);
        });
        
        it('Axe.N returns y - 1', () => {
            var newPosition = mvt.avancer(Axe.N, position);
            newPosition.y.should.equal(19);
            newPosition.x.should.equal(10);
        });
        
        it('Axe.S returns y + 1', () => {
            var newPosition = mvt.avancer(Axe.S, position);
            newPosition.y.should.equal(21);
            newPosition.x.should.equal(10);
        });
        
        it('Axe.O returns x - 1', () => {
            var newPosition = mvt.avancer(Axe.O, position);
            newPosition.y.should.equal(20);
            newPosition.x.should.equal(9);
        });
        
        it('Axe.E returns x + 1', () => {
            var newPosition = mvt.avancer(Axe.E, position);
            newPosition.y.should.equal(20);
            newPosition.x.should.equal(11);
        });

    });
});

describe('Axe', () => {
    it('Test getAxe Str', () => {
        
        it('returns Axe.N', () => {
            var newAxe = Axe.getAxe("N");
            newAxe.should.equal(Axe.N);
        });
        
        it('returns Axe.O', () => {
            var newAxe = Axe.getAxe("O");
            newAxe.should.equal(Axe.O);
        });

    });
    
    it('Test Axe.N', () => {
        
        it('returns Axe.N', () => {
            var newAxe = Axe.N.deplacer(Mouvement.A);
            newAxe.should.equal(Axe.N);
        });
        
        it('returns Axe.O', () => {
            var newAxe = Axe.N.deplacer(Mouvement.G);
            newAxe.should.equal(Axe.N);
        });

    });
    
    it('Test Axe.S', () => {
        
        it('returns Axe.S', () => {
            var newAxe = Axe.S.deplacer(Mouvement.A);
            newAxe.should.equal(Axe.S);
        });
        
        it('returns Axe.E', () => {
            var newAxe = Axe.S.deplacer(Mouvement.G);
            newAxe.should.equal(Axe.E);
        });

    });
    
    it('Test Axe.E', () => {
        
        it('returns Axe.E', () => {
            var newAxe = Axe.E.deplacer(Mouvement.A);
            newAxe.should.equal(Axe.E);
        });
        
        it('returns Axe.N', () => {
            var newAxe = Axe.N.deplacer(Mouvement.G);
            newAxe.should.equal(Axe.N);
        });
        
        it('returns Axe.S', () => {
            var newAxe = Axe.S.deplacer(Mouvement.D);
            newAxe.should.equal(Axe.S);
        });

    });
    
});

describe('Aventurier', () => {
    
    let aventurier;
    beforeEach(() => {
        aventurier = new Aventurier("Lara", new Case(1,3), Axe.N, [Mouvement.A, Mouvement.D]);
    });
    
    it('constructor', () => {  
        aventurier.should.not.be.null;
    });
    
    
    it('next Mvt', () => {  
        var nextPosition = aventurier.nextPosition();
        var testNextPosition = new Case(1, 2);
        nextPosition.x.should.equals(testNextPosition.x);
        nextPosition.y.should.equals(testNextPosition.y);
    });
    
    it('est sur position', () => {  
        var testPosition = new Case(1, 3);
        aventurier.estSurCettePosition(testPosition).should.be.true;
        testPosition = new Case(2, 3);
        aventurier.estSurCettePosition(testPosition).should.be.false;
    });
    
    it('ramasser tresor', () => {
        aventurier.nbTresor.should.equals(0);
        aventurier.ramasserTresors(1);
        aventurier.nbTresor.should.equals(1);
    });
    
    it('ignorer Mvt', () => {  
        var nextPosition = aventurier.nextPosition();
        var testNextPosition = new Case(1, 2);
        nextPosition.x.should.equals(testNextPosition.x);
        nextPosition.y.should.equals(testNextPosition.y);
        
        aventurier.ignoreNextDeplacement();
        
        nextPosition = aventurier.nextPosition();
        testNextPosition = new Case(1, 3);
        nextPosition.x.should.equals(testNextPosition.x);
        nextPosition.y.should.equals(testNextPosition.y);
    });
    
    it('effectuer deplacement', () => {
        var thisPosition = new Case(1, 3);
        aventurier.estSurCettePosition(thisPosition).should.be.true;
        
        var resultDeplacemnt = aventurier.effectuerDeplacement();
        resultDeplacemnt.should.be.true;
        
        thisPosition = new Case(1, 2);
        aventurier.estSurCettePosition(thisPosition).should.be.true;
    });

});