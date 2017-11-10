const fs = require('fs');

import Plateau from './plateau';
import Case from './case';
import Montagne from './montagne';
import Tresor from './tresor';
import Aventurier from './aventurier';
import Mouvement from './mouvement';
import Axe from './axe';

const LINE_CARTE = "C";
const LINE_MONTAGNE = "M";
const LINE_TRESOR = "T";
const LINE_AVENTURIER = "A";

export function initData(filenameInput) {

    var nbCasesH = 0,
        nbCasesV = 0,
        listMontagnes = [],
        listTresors = [],
        listAventuriers = [];

    var array = fs.readFileSync(filenameInput).toString().split("\n");
    for (let line of array) {
        var arrayOfLine = line.split(" - ");

        if (arrayOfLine[0] == LINE_CARTE) {
            nbCasesH = arrayOfLine[1];
            nbCasesV = arrayOfLine[2];

        } else if (arrayOfLine[0] == LINE_MONTAGNE) {
            var montagne = new Montagne(arrayOfLine[1], arrayOfLine[2]);
            listMontagnes.push(montagne);

        } else if (arrayOfLine[0] == LINE_TRESOR) {
            var tresor = new Tresor(arrayOfLine[1], arrayOfLine[2], arrayOfLine[3]);
            listTresors.push(tresor);

        } else if (arrayOfLine[0] == LINE_AVENTURIER) {
            var position = new Case(arrayOfLine[2], arrayOfLine[3]);

            var mouvements = [];
            for (let mvt of arrayOfLine[5]) {
                mouvements.push(Mouvement.getMouvement(mvt));
            }

            var aventurier = new Aventurier(arrayOfLine[1], position, Axe.getAxe(arrayOfLine[4]), mouvements);
            listAventuriers.push(aventurier);
        }
    }
    return new Plateau(nbCasesH, nbCasesV, listTresors, listMontagnes, listAventuriers);
}

export function printResult(plateau, filenameOutput) {
    var logger = fs.createWriteStream(filenameOutput);

    // Print plateau
    logger.write(plateau.toString() + '\n');
    // Print Montagne
    plateau.montagnes.forEach(function (montagne) {
        logger.write(montagne.toString() + '\n');
    });
    // Print Tresor
    plateau.tresors.forEach(function (tresor) {
        logger.write(tresor.toString() + '\n');
    });
    // aventuriers
    plateau.aventuriers.forEach(function (aventurier) {
        logger.write(aventurier.toString() + '\n');
    });
    // Close File
    logger.end();
};