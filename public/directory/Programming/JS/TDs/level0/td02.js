/* td02

Le but de ce TD est d'implémenter la fonction
add, prenant deux paramètres (a et b) et retournant
la somme de ceux-ci.

*/

/* TD Part */

function add(a, b) {
}

/* Testing Part */

const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);

if (add(a, b) == (a + b)) {
    console.log('TD02:: OK');
} else {
    console.log('TD02:: KO')
}