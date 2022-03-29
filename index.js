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

    version 🇫🇷
    Définir une fonction qui retourne un tableau de tableau représentant une échiquier.
    [
        ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8'],
        ['b - 1', 'b - 2', 'b - 3', 'b - 4', 'b - 5', 'b - 6', 'b - 7', 'b - 8'],
        ...,
        ['h - 1', 'h - 2', 'h - 3', 'h - 4', 'h - 5', 'h - 6', 'h - 7', 'h - 8'],
    ]
 */

/**
 * Cycle de 3min
 * Ali -> Audren -> Ophélie -> Stephane -> Ali -> ...
 */

/** Votre code 👇 */

/*const echiquier = */
function echiquier() {
	// je creer mon array chessboard qui contiendra toutes nos colonnes
	const chessboard = [];
	// J'initialise mon compteur de colonne (a -> h)
	const lettres = ["a", "b", "c", "d", "e", "f", "g", "h"];

	// Je boucle sur les lettres
	for (let i = 0; i < lettres.length; i++) {
		// Je creer mon array colonne qui contiendra toutes les lignes
		chessboard.push([]);
		for (let j = 1; j <= 8; j++) {
			// Je push dans mon array colonne les coordonnées de chaque case
			chessboard[i].push(lettres[i] + " - " + j);
		}
	}
	//je retourne mon array chessboard
	return chessboard;
}
console.log(echiquier());
