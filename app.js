import Plateau from './src/plateau';

import {initData, printResult} from './src/fileService';

const filenameInput = "input.txt";
const filenameOutput = "output.txt";

// Init Data
var plateau = initData(filenameInput);

// deplacement des aventuriers
plateau.deplacerAventuriers().then(data => {
    // Print result
    printResult(plateau, filenameOutput);
});