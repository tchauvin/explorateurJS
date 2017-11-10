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

/*describe('Aventurier', () => {
    describe('#constructor()', () => {
        it('requires arguments', () => {
            () => {
                new Aventurier();
            }.should.throw(Error);

            () => {
                new Aventurier('foo', 'bar', 'test', 'toto');
            }.should.throw(Error);

        });
    });

});*/