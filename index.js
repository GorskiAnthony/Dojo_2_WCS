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

/**
 * Cycle de 3 min
 * Abdallah -> Christophe -> Gloria -> Kévin -> Oscar -> Abdallah -> ...
 */

/** Votre code 👇 */

function chess() {
	const x = ["a", "b", "c", "d", "e", "f", "g", "h"]; //✅
	const y = ["1", "2", "3", "4", "5", "6", "7", "8"]; //✅
	let chessboard = []; //✅

	/**
	 * Cette fonction va créer une ligne de l'echiquier
	 */
	for (let i = 0; i < x.length; i++) {
		//✅
		//    🚩
		chessboard.push([]);
		/**
		 * Cette fonction va récuperer les valeurs de x et y
		 * ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8']
		 */
		for (let j = 0; j < y.length; j++) {
			// ✅
			chessboard[i].push(x[i] + " - " + y[j]);
		}
		//    🚩
	}
	return chessboard; //✅
}
console.log(chess()); //✅
