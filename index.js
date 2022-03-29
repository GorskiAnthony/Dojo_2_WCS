/**
 * version 🇬🇧
 * Chessboard dojo
 * In order to represent a chessboard in a program, write a chessboard function that will return an array of arrays containing the squares coordinates.
    [
        ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8'],
        ['b - 1', 'b - 2', 'b - 3', 'b - 4', 'b - 5', 'b - 6', 'b - 7', 'b - 8'],
        ...,
        ['h - 1', 'h - 2', 'h - 3', 'h - 4', 'h - 5', 'h - 6', 'h - 7', 'h - 8'],
    ]

    verion 🇫🇷
    Définir une fonction qui retourne un tableau de tableau représentant une échiquier.
    [
        ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8'],
        ['b - 1', 'b - 2', 'b - 3', 'b - 4', 'b - 5', 'b - 6', 'b - 7', 'b - 8'],
        ...,
        ['h - 1', 'h - 2', 'h - 3', 'h - 4', 'h - 5', 'h - 6', 'h - 7', 'h - 8'],
    ]
 */

/** Cycle de 3min
 * Basile -> Guillaume -> Olivier -> Sébastien -> Valérie -> Basile -> ...
 *
 *
 * */

/** Votre code 👇 */

let echequier = [];
let lettres = ["a", "b", "c", "d", "e", "f", "g", "h"];
let chiffres = [1, 2, 3, 4, 5, 6, 7, 8];
let lignes = [];
let string = "";

function makeLine() {
	// A quoi sert cette boucle ? Bas écris xD
	for (let i = 0; i < lettres.length; i++) {
		for (let j = 0; j < chiffres.length; j++) {
			lignes.push(lettres[i] + " - " + chiffres[j]);
		}
		echequier.push(lignes);
		lignes = [];
	}
	return echequier;
}

// function makeLine2() {
// 	// A quoi sert cette boucle ? Bas écris xD
// 	//
// 	for (let i = 0; i < lettres.length; i++) {
// 		for (let j = 0; j < chiffres.length; j++) {
// 			echequier[i][j] = lettres[i] + " - " + chiffres[j];
// 			// string = " - " + chiffres[j];
// 		}
// 	}
// 	return echequier;
// }

console.log(makeLine());
