/* td06 - Première boucle

Maintenant, passons à l'utilisation de boucles !
Le but de ce TD est de terminer d'implémenter la
fonction loop999, qui retourne une chaîne de 
caractères contenant à la suite, sans espace les
nombres de 0 à 999.

Une chaine de la forme : "012345678910111213"-> 
jusqu'à 999 inclus

*/

/* TD Part */

function loop999() {

}

/* Testing Part */
const array = '0'.repeat(1000).split('').map((i, id) => id).join('');
if (loop999() === array) {
    console.log('TD06:: OK');
} else {
    console.log('TD06:: KO');
}
